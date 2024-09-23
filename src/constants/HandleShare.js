export const handleShare = () => {
    const shareData = {
      title: 'Portfolio',
      text: 'Check out this website!',
      url: window.location.href,
    };
  
    if (navigator.share) {
      navigator.share(shareData).catch((error) => {
        console.error('Error sharing', error);
        toast.error('Sharing failed');
      });
    } else {
      // Fallback for specific platforms
      const url = encodeURIComponent(window.location.href);
      const text = encodeURIComponent('Check out this website!');
      const whatsappURL = `https://api.whatsapp.com/send?text=${text}%20${url}`;
      const twitterURL = `https://twitter.com/intent/tweet?text=${text}&url=${url}`;
      const gmailURL = `https://mail.google.com/mail/?view=cm&fs=1&to=&su=${text}&body=${url}`;
  
      window.open(whatsappURL, '_blank');
      window.open(twitterURL, '_blank');
      window.open(gmailURL, '_blank');
    }
  };