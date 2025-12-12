import React, { useState } from 'react';
import axios from 'axios';
import { Trash2, Plus, Upload } from 'lucide-react';

const AddPackageForm = () => {
  // 1. State for static form fields
  const [formData, setFormData] = useState({
    packageName: '',
    displayText: '',
    category: ''
  });

  const [selectedImage, setSelectedImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);

  // 2. State for Dynamic Sections
  // Initial state has one empty section
  const [sections, setSections] = useState([
    { heading: '', description: '' }
  ]);

  // --- Handlers for Static Fields ---
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedImage(file);
      // Create a preview URL
      setImagePreview(URL.createObjectURL(file));
    }
  };

  // --- Handlers for Dynamic Sections ---
  const handleSectionChange = (index, field, value) => {
    const updatedSections = [...sections];
    updatedSections[index][field] = value;
    setSections(updatedSections);
  };

  const addSection = () => {
    setSections([...sections, { heading: '', description: '' }]);
  };

  const removeSection = (index) => {
    // Prevent deleting if it's the only section left (optional UX choice)
    if (sections.length > 1) {
      const updatedSections = sections.filter((_, i) => i !== index);
      setSections(updatedSections);
    } else {
        // If it's the last one, just clear it
        setSections([{ heading: '', description: '' }]);
    }
  };

  // --- Submission Handler ---
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Create FormData object for file upload
    const data = new FormData();
    data.append('packageName', formData.packageName);
    data.append('displayText', formData.displayText);
    data.append('category', formData.category);
    data.append('sections', JSON.stringify(sections)); // Send sections as JSON string
    if (selectedImage) {
      data.append('image', selectedImage);
    }

    try {
      // Replace with your actual API endpoint
      const response = await axios.post('https://your-api-endpoint.com/api/packages', data, {
        headers: { 'Content-Type': 'multipart/form-data' }
      });
      
      alert('Package created successfully!');
      console.log(response.data);
      
      // Reset Form
      setFormData({ packageName: '', displayText: '', category: '' });
      setSections([{ heading: '', description: '' }]);
      setSelectedImage(null);
      setImagePreview(null);

    } catch (error) {
      console.error('Error creating package:', error);
      alert('Failed to create package');
    }
  };

  return (
    <div className="min-h-screen bg-white p-4 md:p-8 font-sans">
      <div className="max-w-2xl mx-auto">
        
        <h1 className="text-3xl md:text-4xl font-bold text-center text-black mb-10">
          Create A new Package
        </h1>

        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          
          {/* --- Image Upload --- */}
          <div className="relative">
            <input 
              type="file" 
              accept="image/*"
              onChange={handleImageChange}
              className="hidden" 
              id="imageUpload"
            />
            <label 
              htmlFor="imageUpload" 
              className="flex items-center justify-between w-full px-4 py-3 rounded-lg border border-black cursor-pointer hover:bg-gray-50 transition-colors"
            >
              <span className={selectedImage ? "text-black" : "text-gray-500"}>
                {selectedImage ? selectedImage.name : "Select Image"}
              </span>
              <Upload size={20} className="text-gray-500" />
            </label>
            {/* Image Preview (Optional) */}
            {imagePreview && (
                <div className="mt-2 w-full h-40 bg-gray-100 rounded-lg overflow-hidden">
                    <img src={imagePreview} alt="Preview" className="w-full h-full object-cover" />
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
              name="category"
              value={formData.category}
              onChange={handleInputChange}
              className="w-full px-4 py-3 rounded-lg border border-black text-black bg-white appearance-none outline-none focus:border-[#5937E0] cursor-pointer"
              required
            >
              <option value="" disabled>Package Category</option>
              <option value="adventure">Adventure</option>
              <option value="spiritual">Spiritual</option>
              <option value="trekking">Trekking</option>
              <option value="luxury">Luxury</option>
            </select>
            {/* Custom Arrow Icon */}
            <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
              <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 1.5L6 6.5L11 1.5" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </div>

          {/* --- Dynamic Sections Header --- */}
          <div className="mt-6">
            <h2 className="text-3xl font-normal text-black mb-4">Sections</h2>
            
            <div className="flex flex-col gap-6">
              {sections.map((section, index) => (
                <div key={index} className="flex flex-col gap-3 animate-fadeIn">
                  
                  {/* Row 1: Heading + Delete Button */}
                  <div className="flex items-center gap-3">
                    <input
                      type="text"
                      placeholder="Section Heading"
                      value={section.heading}
                      onChange={(e) => handleSectionChange(index, 'heading', e.target.value)}
                      className="flex-1 px-4 py-3 rounded-lg border border-black text-black placeholder-gray-500 outline-none focus:border-[#5937E0]"
                    />
                    <button
                      type="button"
                      onClick={() => removeSection(index)}
                      className="p-2 text-red-500 hover:bg-red-50 rounded-full transition-colors"
                      title="Remove Section"
                    >
                      <Trash2 size={24} />
                    </button>
                  </div>

                  {/* Row 2: Description + Add Button (Only on the last item or specific logic) */}
                  <div className="flex items-start gap-3">
                    <textarea
                      placeholder="Section description"
                      value={section.description}
                      onChange={(e) => handleSectionChange(index, 'description', e.target.value)}
                      rows="3"
                      className="flex-1 px-4 py-3 rounded-lg border border-black text-black placeholder-gray-500 outline-none resize-none focus:border-[#5937E0]"
                    ></textarea>
                    
                    {/* Plus button next to description as per design image */}
                    {index === sections.length - 1 && (
                        <button
                        type="button"
                        onClick={addSection}
                        className="p-2 bg-[#5937E0] text-white rounded-lg hover:bg-[#452ab8] transition-colors mt-2 shadow-md"
                        title="Add New Section"
                        >
                        <Plus size={24} />
                        </button>
                    )}
                    {/* Placeholder div to keep alignment if not the last item */}
                    {index !== sections.length - 1 && <div className="w-[40px]"></div>}
                  </div>
                  
                </div>
              ))}
            </div>
          </div>

          {/* --- Action Buttons --- */}
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mt-10">
            <button
              type="button"
              onClick={() => {
                  setFormData({ packageName: '', displayText: '', category: '' });
                  setSections([{ heading: '', description: '' }]);
                  setSelectedImage(null);
                  setImagePreview(null);
              }}
              className="w-full sm:w-auto px-10 py-3 bg-[#FF0000] text-white text-lg rounded-full hover:bg-red-700 transition-colors"
            >
              Reset
            </button>
            
            <div className="flex gap-4 w-full sm:w-auto">
                <button
                type="submit"
                className="flex-1 sm:flex-none px-10 py-3 bg-[#5937E0] text-white text-lg rounded-full hover:bg-[#452ab8] transition-colors shadow-lg shadow-purple-200"
                >
                Save
                </button>
                
              
            </div>
          </div>

        </form>
      </div>
    </div>
  );
};

export default AddPackageForm;