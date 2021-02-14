console.log("[Likilter] Filter Start");
function filter() {
  const twitter = document.querySelectorAll(
    ".css-901oao.css-16my406.r-jwli3a.r-poiln3.r-b88u0q.r-bcqeeo.r-qvutc0"
  );
  if (twitter.length > 0) {
    twitter.forEach((e) => {
      e.innerText = "?";
    });
  }

  const twitterPosts = document.querySelectorAll(
    ".css-901oao.css-16my406.r-poiln3.r-n6v787.r-1sf4r6n.r-1j6idkz.r-utggzx.r-d3hbe1.r-1wgg2b2.r-axxi2z.r-qvutc0"
  );
  if (twitterPosts.length > 0) {
    twitterPosts.forEach((e) => {
      e.innerText = "?";
    });
  }

  const twitterOpenPosts = document.querySelectorAll(
    ".css-4rbku5.css-18t94o4.css-901oao.r-jwli3a.r-1loqt21.r-1qd0xha.r-a023e6.r-16dba41.r-ad9z0x.r-bcqeeo.r-qvutc0"
  );
  if (twitterOpenPosts.length > 0) {
    twitterOpenPosts.forEach((e) => {
      e.innerHTML = "?";
    });
  }

  const twitterOpenPosts2 = document.querySelectorAll('.css-1dbjc4n.r-xoduu5.r-1udh08x');
  if (twitterOpenPosts2.length > 0) {
    twitterOpenPosts2.forEach((e) => {
      e.innerHTML = "?";
    });
  }

  const instagramProfile = document.querySelectorAll(".g47SY");
  if (instagramProfile.length > 0) {
    instagramProfile.forEach((e) => {
      e.innerText = "?";
    });
  }

  const instagramOpenPost = document.querySelectorAll(".Nm9Fw");
  if (instagramOpenPost) {
    instagramOpenPost.forEach((e) => {
      e.innerText = "Curtido por ?";
    });
  }
}
setInterval(filter, 1000);