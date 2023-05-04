import React from 'react'
import PropTypes from 'prop-types'

import './youtubeEmbed.css'

const YoutubeEmbed = ({embedId}) => {
  return (
    <div className="yt_responsive">
<iframe width="560" height="315" src="https://www.youtube.com/embed/sNMQ5xwFRlg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </div>
  )
}

YoutubeEmbed.propTypes = {
    embedId: PropTypes.string.isRequired
};

export default YoutubeEmbed