import React, { useState } from 'react';
import './ProductForm.scss';

interface FormProps {
  handleSubmit: (e: React.FormEvent) => void;
  errors: any;
  formValues: any;
  setFormValues: React.Dispatch<React.SetStateAction<any>>;
  categories: string[];
}

const ProductForm: React.FC<FormProps> = ({
  handleSubmit,
  errors,
  formValues,
  setFormValues,
  categories,
}) => {
  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  return (
    <div className='container'>
      <form onSubmit={handleSubmit} className='form-container'>
        <div>
          <label htmlFor='title'>Title</label>
          <input
            type='text'
            id='title'
            name='title'
            value={formValues.title}
            onChange={handleChange}
          />
          {errors.title && <div style={{ color: 'red' }}>{errors.title}</div>}
        </div>

        <div>
          <label htmlFor='price'>Price</label>
          <input
            type='number'
            id='price'
            name='price'
            value={formValues.price}
            onChange={handleChange}
          />
          {errors.price && <div style={{ color: 'red' }}>{errors.price}</div>}
        </div>

        <div>
          <label htmlFor='description'>Description</label>
          <textarea
            id='description'
            name='description'
            value={formValues.description}
            onChange={handleChange}
          />
          {errors.description && (
            <div style={{ color: 'red' }}>{errors.description}</div>
          )}
        </div>

        <div>
          <label htmlFor='image'>Image URL</label>
          <input
            type='text'
            id='image'
            name='image'
            value={formValues.image}
            onChange={handleChange}
          />
          {errors.image && <div style={{ color: 'red' }}>{errors.image}</div>}
        </div>

        <div>
          <label htmlFor='category'>Category</label>
          <select
            id='category'
            name='category'
            value={formValues.category}
            onChange={handleChange}
          >
            <option value=''>Select category</option>

            {categories.map((category) => (
              <option key={category} value={`${category}`}>{category}</option>
            ))}
          </select>
          {errors.category && (
            <div style={{ color: 'red' }}>{errors.category}</div>
          )}
        </div>
      </form>
    </div>
  );
};

export default ProductForm;
