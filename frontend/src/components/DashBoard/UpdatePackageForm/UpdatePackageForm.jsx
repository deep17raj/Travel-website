import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import { Trash2, Plus, Upload, Image as ImageIcon } from 'lucide-react';

const UpdatePackageForm = () => {
  const { id } = useParams(); // Get Package ID from URL
  const navigate = useNavigate();

  // 1. Static Data State
  const [formData, setFormData] = useState({
    packageName: '',
    displayText: '',
    packageCategory: ''
  });

  // 2. Main Image State
  const [mainImage, setMainImage] = useState(null); // File object for new upload
  const [mainImagePreview, setMainImagePreview] = useState(null); // URL string

  // 3. Dynamic Sections State
  const [sections, setSections] = useState([]);

  const [isLoading, setIsLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // --- Fetch Existing Data ---
  useEffect(() => {
    const fetchPackageData = async () => {
      try {
        setIsLoading(true);
        const response = await axios.get(`${import.meta.env.VITE_API_URL}/api/v1/get/detail/${id}`);
        const data = response.data.data || response.data;

        // Populate Static Fields
        setFormData({
          packageName: data.packageName || '',
          displayText: data.displayText || '',
          packageCategory: data.packageCategory || ''
        });

        // Populate Main Image Preview
        if (data.imageUrl) {
          setMainImagePreview(data.imageUrl);
        }

        // Populate Sections
        // Map backend sections to frontend structure. Note: backend uses 'imageUrl', frontend expects 'preview' for display
        const mappedSections = (data.sections || []).map(sec => ({
          heading: sec.heading,
          description: sec.description,
          image: null, // No file initially
          preview: sec.imageUrl || null, // Existing URL
          image_id: sec.image_id // Keep track of existing image ID if needed
        }));

        setSections(mappedSections.length > 0 ? mappedSections : [{ heading: '', description: '', image: null, preview: null }]);
        
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching package details:", error);
        alert("Failed to load package details.");
        setIsLoading(false);
      }
    };

    if (id) {
        fetchPackageData();
    }
  }, [id]);


  // --- Handlers for Static Fields ---
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleMainImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setMainImage(file);
      setMainImagePreview(URL.createObjectURL(file));
    }
  };

  // --- Handlers for Dynamic Sections ---
  const handleSectionChange = (index, field, value) => {
    const updatedSections = [...sections];
    updatedSections[index][field] = value;
    setSections(updatedSections);
  };

  const handleSectionImageChange = (index, e) => {
    const file = e.target.files[0];
    if (file) {
      const updatedSections = [...sections];
      updatedSections[index].image = file; // New file to upload
      updatedSections[index].preview = URL.createObjectURL(file); // Preview new image
      setSections(updatedSections);
    }
  };

  const addSection = () => {
    setSections([...sections, { heading: '', description: '', image: null, preview: null }]);
  };

  const removeSection = (index) => {
    if (sections.length > 1) {
      const updatedSections = sections.filter((_, i) => i !== index);
      setSections(updatedSections);
    } else {
      setSections([{ heading: '', description: '', image: null, preview: null }]);
    }
  };

  // --- Submission Handler (UPDATE) ---
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const data = new FormData();

      // 1. Append Static Fields
      data.append('packageName', formData.packageName);
      data.append('packageCategory', formData.packageCategory);
      data.append('displayText', formData.displayText);

      // 2. Append Main Image (Only if a new file is selected)
      if (mainImage) {
        data.append('mainImage', mainImage);
      }

      // 3. Prepare Sections Data
      // IMPORTANT: For updates, backend might need to know which sections kept their old images.
      // Usually, you send the text data JSON, and backend logic handles preserving old images if new ones aren't sent.
      // Or you might need to send the old 'imageUrl' back in the JSON if your backend supports that.
      
      const sectionsPayload = sections.map(sec => ({
        heading: sec.heading,
        description: sec.description,
        // Send back the old image URL/ID so backend knows to keep it if no new file is uploaded
        // This depends on your specific backend implementation. 
        // If your backend completely replaces sections, you MUST send back the old image URL/ID here.
        imageUrl: sec.preview?.startsWith('blob:') ? null : sec.preview, 
        image_id: sec.image_id
      }));
      
      data.append('sections', JSON.stringify(sectionsPayload));

      // 4. Append New Section Images
      sections.forEach((sec, index) => {
        if (sec.image) {
          // Key must match what backend expects for that index
          data.append(`sectionImage_${index}`, sec.image);
        }
      });

      // 5. Send PATCH Request
      const response = await axios.patch(
        `${import.meta.env.VITE_API_URL}/api/v1/modify/package/${id}`, 
        data, 
        {
            headers: { 
                'Content-Type': 'multipart/form-data',
                // Add Authorization header if needed
                // 'Authorization': `Bearer ${token}` 
            }
        }
      );

      alert('Package updated successfully!');
      console.log("Update Response:", response.data);
      
      // Optional: Navigate back or refresh
      // navigate('/dashboard/packages');

    } catch (error) {
      console.error('Error updating package:', error);
      const errorMsg = error.response?.data?.message || 'Failed to update package';
      alert(errorMsg);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isLoading) {
      return <div className="min-h-screen flex justify-center items-center text-xl font-semibold">Loading Package Data...</div>;
  }

  return (
    <div className="min-h-screen bg-white p-4 md:p-8 font-sans">
      <div className="max-w-3xl mx-auto">
        
        <h1 className="text-3xl md:text-4xl font-bold text-center text-black mb-10">
          Update Package
        </h1>

        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          
          {/* --- Main Image Upload --- */}
          <div className="relative">
            <input 
              type="file" 
              accept="image/*"
              onChange={handleMainImageChange}
              className="hidden" 
              id="mainImageUpload"
            />
            <label 
              htmlFor="mainImageUpload" 
              className="flex items-center justify-between w-full px-4 py-3 rounded-lg border border-black cursor-pointer hover:bg-gray-50 transition-colors"
            >
              <span className="text-black">
                {mainImage ? mainImage.name : "Change Main Package Image"}
              </span>
              <Upload size={20} className="text-gray-500" />
            </label>
            {mainImagePreview && (
                <div className="mt-2 w-full h-48 bg-gray-100 rounded-lg overflow-hidden border border-gray-200 relative group">
                    <img src={mainImagePreview} alt="Preview" className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-black/40 hidden group-hover:flex items-center justify-center text-white text-sm">
                        Current Image
                    </div>
                </div>
            )}
          </div>

          {/* --- Package Name --- */}
          <input
            type="text"
            name="packageName"
            value={formData.packageName}
            onChange={handleInputChange}
            placeholder="Package Name"
            className="w-full px-4 py-3 rounded-lg border border-black text-black placeholder-gray-500 outline-none focus:border-[#5937E0] transition-colors"
            required
          />

          {/* --- Display Text --- */}
          <input
            type="text"
            name="displayText"
            value={formData.displayText}
            onChange={handleInputChange}
            placeholder="Display Text"
            className="w-full px-4 py-3 rounded-lg border border-black text-black placeholder-gray-500 outline-none focus:border-[#5937E0] transition-colors"
            required
          />

          {/* --- Category Dropdown --- */}
          <div className="relative">
            <select
              name="packageCategory"
              value={formData.packageCategory}
              onChange={handleInputChange}
              className="w-full px-4 py-3 rounded-lg border border-black text-black bg-white appearance-none outline-none focus:border-[#5937E0] cursor-pointer"
              required
            >
              <option value="" disabled>Package Category</option>
              <option value="adventure">Adventure</option>
              <option value="spiritual">Spiritual</option>
              <option value="trekking">Trekking</option>
              <option value="luxury">Luxury</option>
              <option value="beach">Beach</option>
            </select>
            <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
              <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 1.5L6 6.5L11 1.5" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </div>

          {/* --- Dynamic Sections --- */}
          <div className="mt-8 border-t border-gray-200 pt-6">
            <h2 className="text-2xl font-semibold text-black mb-6">Itinerary Sections</h2>
            
            <div className="flex flex-col gap-8">
              {sections.map((section, index) => (
                <div key={index} className="flex flex-col gap-4 p-4 bg-gray-50 rounded-xl border border-gray-200 animate-fadeIn">
                  
                  {/* Section Header */}
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-bold text-gray-500 uppercase">Section {index + 1}</span>
                    <button
                      type="button"
                      onClick={() => removeSection(index)}
                      className="text-red-500 hover:text-red-700 hover:bg-red-50 p-2 rounded-full transition-colors"
                      title="Remove Section"
                    >
                      <Trash2 size={20} />
                    </button>
                  </div>

                  {/* Heading Input */}
                  <input
                    type="text"
                    placeholder="Section Heading (e.g., Day 1)"
                    value={section.heading}
                    onChange={(e) => handleSectionChange(index, 'heading', e.target.value)}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#5937E0] outline-none"
                    required
                  />

                  {/* Description Input */}
                  <textarea
                    placeholder="Section description"
                    value={section.description}
                    onChange={(e) => handleSectionChange(index, 'description', e.target.value)}
                    rows="3"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#5937E0] outline-none resize-none"
                    required
                  ></textarea>

                  {/* Section Image Upload */}
                  <div className="flex items-center gap-4">
                      <label className="flex items-center gap-2 cursor-pointer bg-white border border-gray-300 px-4 py-2 rounded-lg hover:bg-gray-100 transition-colors">
                          <ImageIcon size={18} className="text-gray-600"/>
                          <span className="text-sm text-gray-700">
                             {section.preview ? "Change Image" : "Add Section Image"}
                          </span>
                          <input 
                            type="file" 
                            accept="image/*"
                            className="hidden"
                            onChange={(e) => handleSectionImageChange(index, e)}
                          />
                      </label>
                      
                      {/* Section Image Preview */}
                      {section.preview && (
                          <div className="h-16 w-24 rounded-lg overflow-hidden border border-gray-300 bg-gray-200">
                              <img src={section.preview} alt="Sec Preview" className="w-full h-full object-cover" />
                          </div>
                      )}
                  </div>

                  {/* Add Button (Only on last item) */}
                  {index === sections.length - 1 && (
                    <div className="flex justify-end mt-2">
                         <button
                            type="button"
                            onClick={addSection}
                            className="flex items-center gap-2 bg-[#5937E0] text-white px-4 py-2 rounded-lg hover:bg-[#452ab8] transition-colors shadow-sm"
                         >
                            <Plus size={18} /> Add Next Section
                         </button>
                    </div>
                  )}

                </div>
              ))}
            </div>
          </div>

          {/* --- Action Buttons --- */}
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mt-10 pb-10">
            <button
              type="button"
              onClick={() => navigate(-1)} // Go back
              className="w-full sm:w-auto px-10 py-3 bg-gray-100 text-gray-700 font-semibold text-lg rounded-full hover:bg-gray-200 transition-colors"
            >
              Cancel
            </button>
            
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full sm:w-auto px-12 py-3 bg-[#5937E0] text-white font-bold text-lg rounded-full hover:bg-[#452ab8] transition-colors shadow-lg shadow-purple-200 disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Updating...' : 'Update Package'}
            </button>
          </div>

        </form>
      </div>
    </div>
  );
};

export default UpdatePackageForm;