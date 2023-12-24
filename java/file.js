$(function() {
    const videoElement = $('#video1').get(0);
  
    if (!videoElement) {
      console.error("Video element not found");
      return;
    }
  
    const videoStart = $('#video1container').offset().top; // 影片division的頂部位置
    const videoEnd = videoStart + $('#video1container').height(); // 影片division的底部位置
    const maxScroll = $(document).height() - $(window).height();
  
    $(window).scroll(function() {
      const currentScrollPosition = $(document).scrollTop();
  
      if (currentScrollPosition >= videoStart && currentScrollPosition <= videoEnd) {
        // 影片division在畫面中
        if (videoElement.paused) {
          videoElement.play();
        }
      } else {
        // 影片division不在畫面中
        if (!videoElement.paused) {
          videoElement.pause();
        }
      }
  
      if (videoElement.duration) {
        videoElement.currentTime = videoElement.duration * (currentScrollPosition - videoStart) / (videoEnd - videoStart);
      } else {
        console.warn("Video duration is not available");
      }
    });
  });

  var video = document.getElementById('video2');

  // Disable scrolling when the video is playing
  video.addEventListener('playing', function () {
    document.body.style.overflow = 'hidden';
  });

  // Enable scrolling when the video ends
  video.addEventListener('ended', function () {
    document.body.style.overflow = 'auto';
  });

/* $(function() {
  const videoElement = $('#video2').get(0);
  
  if (!videoElement) {
    console.error("Video element not found");
    return;
  }
  
  const videoStart = $('#video2container').offset().top; // 影片division的頂部位置
  const videoEnd = videoStart + $('#video2container').height(); // 影片division的底部位置
  const maxScroll = $(document).height() - $(window).height();
  
  $(window).scroll(function() {
    const currentScrollPosition = $(document).scrollTop();
  
    if (currentScrollPosition >= videoStart && currentScrollPosition <= videoEnd) {
      // 影片division在畫面中
      if (videoElement.paused) {
        videoElement.play();
      }
     } else {
      // 影片division不在畫面中
      if (!videoElement.paused) {
         videoElement.pause();
      }
    }
  
     if (videoElement.duration) {
       videoElement.currentTime = videoElement.duration * (currentScrollPosition - videoStart) / (videoEnd - videoStart);
     } else {
       console.warn("Video duration is not available");
     }
   });
 }); */
  