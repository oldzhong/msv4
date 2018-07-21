import React from 'react'

class ImageGrid extends React.Component {

    render() {
        return (
            <div className="imageGrid" id="grid">
                {
                    this.props.images.map((image, index) => {
                        return (
                            <div key={index}>
                                <img data-action="room" src={image.src} alt={image.title} title={image.title} />
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}

export default ImageGrid;