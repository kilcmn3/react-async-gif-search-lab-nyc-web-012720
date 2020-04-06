import React from 'react';

const GifSearch = (props) => {
  return (
    <div className='gif search'>
      <form onSubmit={(event) => props.handleSubmit(event)}>
        <label className='search'>ENter a Search Term</label>
        <input
          type='search'
          onChange={(event) => props.handleChange(event.target.value)}
        />
        <input type='submit' value='submit' />
      </form>
    </div>
  );
};

export default GifSearch;
