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

 
$(function() {
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
 });

 $(function() {
  const videoElement = $('#video3').get(0);
  
  if (!videoElement) {
    console.error("Video element not found");
    return;
  }
  
  const videoStart = $('#video3container').offset().top; // 影片division的頂部位置
  const videoEnd = videoStart + $('#video3container').height(); // 影片division的底部位置
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

 $(function() {
  const videoElement = $('#video4').get(0);
  
  if (!videoElement) {
    console.error("Video element not found");
    return;
  }
  
  const videoStart = $('#video4container').offset().top; // 影片division的頂部位置
  const videoEnd = videoStart + $('#video4container').height(); // 影片division的底部位置
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

function toggleDropdown() {
  var dropdownContent = document.getElementById("drop1");
  if (dropdownContent.style.display === "block") {
    dropdownContent.style.display = "none";
  } else {
    dropdownContent.style.display = "block";
  }
}

function toggle2Dropdown() {
  var dropdownContent2 = document.getElementById("drop2");
  if (dropdownContent2.style.display === "block") {
    dropdownContent2.style.display = "none";
  } else {
    dropdownContent2.style.display = "block";
  }
}

function toggle3Dropdown() {
  var dropdownContent3 = document.getElementById("drop3");
  if (dropdownContent3.style.display === "block") {
    dropdownContent3.style.display = "none";
  } else {
    dropdownContent3.style.display = "block";
  }
}