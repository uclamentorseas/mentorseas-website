import React from 'react';

import "./StaffImage.scss";

export default class StaffImage extends React.Component {
  render() {
    const image = this.props.images;

    return (
      <div className='staff-image'>
        <img src={image.regular} alt='staff-member-static'/>
      </div>
    );
  }


/*
  render() {

  const {
    background,
    images
  } = this.props;

  const imageComponent = (
    (images.regular !== images.fun) ?
    <HoverFadeImage regular={images.regular} hover={images.fun} /> :
    <img src={images.regular} alt='team member' />
  );

  return (
    <div className="member_image">
      {background && (<div className="member_image_background">
        {imageComponent}
      </div>
      )}
      <div className="member_image_main">
        {imageComponent}
      </div>
    </div>
  );
}
*/
}
