import React, { useState } from 'react';
import axios from 'axios';
import { Trash2, Plus, Upload, Image as ImageIcon } from 'lucide-react';

const AddPackageForm = () => {
  // 1. Static Data State
  const [formData, setFormData] = useState({
    packageName: '',
    displayText: '',
    packageCategory: '' // Changed key from 'category' to 'packageCategory' to match backend
  });

  // 2. Main Image State
  const [mainImage, setMainImage] = useState(null);
  const [mainImagePreview, setMainImagePreview] = useState(null);

  // 3. Dynamic Sections State (Added 'image' and 'preview' fields)
  const [sections, setSections] = useState([
    { heading: '', description: '', image: null, preview: null }
  ]);

  const [isSubmitting, setIsSubmitting] = useState(false);

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
      updatedSections[index].image = file;
      updatedSections[index].preview = URL.createObjectURL(file);
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
      // Clear last remaining section instead of removing
      setSections([{ heading: '', description: '', image: null, preview: null }]);
    }
  };

  // --- Submission Handler ---
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const data = new FormData();

      // 1. Append Static Fields
      data.append('packageName', formData.packageName);
      data.append('packageCategory', formData.packageCategory);
      data.append('displayText', formData.displayText);

      // 2. Append Main Image
      if (mainImage) {
        data.append('mainImage', mainImage);
      }

      // 3. Prepare Sections Data (excluding file objects)
      // The backend expects a JSON string of objects with { heading, description }
      const sectionsPayload = sections.map(sec => ({
        heading: sec.heading,
        description: sec.description
      }));
      
      data.append('sections', JSON.stringify(sectionsPayload));

      // 4. Append Section Images
      // Backend expects keys like: sectionImage_0, sectionImage_1
      sections.forEach((sec, index) => {
        if (sec.image) {
          data.append(`sectionImage_${index}`, sec.image);
        }
      });

      // --- Debugging: Log FormData keys ---
      // for (var pair of data.entries()) {
      //     console.log(pair[0]+ ', ' + pair[1]); 
      // }

      // 5. Send Request
      const response = await axios.post('http://localhost:3000/api/v1/save/new/package', data, {
        headers: { 'Content-Type': 'multipart/form-data' }
      });

      alert('Package created successfully!');
      console.log("Server Response:", response.data);

      // 6. Reset Form
      setFormData({ packageName: '', displayText: '', packageCategory: '' });
      setMainImage(null);
      setMainImagePreview(null);
      setSections([{ heading: '', description: '', image: null, preview: null }]);

    } catch (error) {
      console.error('Error creating package:', error);
      const errorMsg = error.response?.data?.message || 'Failed to create package';
      alert(errorMsg);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-white p-4 md:p-8 font-sans">
      <div className="max-w-3xl mx-auto">
        
        <h1 className="text-3xl md:text-4xl font-bold text-center text-black mb-10">
          Create A new Package
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
              <span className={mainImage ? "text-black" : "text-gray-500"}>
                {mainImage ? mainImage.name : "Select Main Package Image"}
              </span>
              <Upload size={20} className="text-gray-500" />
            </label>
            {mainImagePreview && (
                <div className="mt-2 w-full h-48 bg-gray-100 rounded-lg overflow-hidden border border-gray-200">
                    <img src={mainImagePreview} alt="Preview" className="w-full h-full object-cover" />
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
                             {section.image ? "Change Image" : "Add Section Image"}
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
              onClick={() => {
                  if(window.confirm("Are you sure you want to reset the form?")) {
                      setFormData({ packageName: '', displayText: '', packageCategory: '' });
                      setSections([{ heading: '', description: '', image: null, preview: null }]);
                      setMainImage(null);
                      setMainImagePreview(null);
                  }
              }}
              className="w-full sm:w-auto px-10 py-3 bg-red-100 text-red-600 font-semibold text-lg rounded-full hover:bg-red-200 transition-colors"
            >
              Reset
            </button>
            
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full sm:w-auto px-12 py-3 bg-[#5937E0] text-white font-bold text-lg rounded-full hover:bg-[#452ab8] transition-colors shadow-lg shadow-purple-200 disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Uploading...' : 'Create Package'}
            </button>
          </div>

        </form>
      </div>
    </div>
  );
};

export default AddPackageForm;