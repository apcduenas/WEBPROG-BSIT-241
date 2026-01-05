document.getElementById("motivateBtn").addEventListener("click", function () {
  alert("Keep pushing forward and never give up on your dreams!");
  // Visual feedback: Flashes the background red like Ghost Rider's flame
  document.body.style.backgroundColor = "#e62117";
  setTimeout(() => {
    document.body.style.backgroundColor = "#0a0a0a";
  }, 200);
});

// Scroll Reveal Effect: Headers glow when they come into view
window.addEventListener('scroll', () => {
  const sections = document.querySelectorAll('section');
  sections.forEach(section => {
    const rect = section.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom >= 0) {
      section.style.borderLeftColor = "#ffcc00"; // Glow yellow
    } else {
      section.style.borderLeftColor = "#e62117"; // Back to red
    }
  const { createApp } = Vue;

const app = createApp({
  data() {
    return {
      // Logic for the Picture Gallery
      manyFoods: [
        { name: 'PROFILE PICTURE', url: 'https://as-prod.asyncgw.teams.microsoft.com/v1/9f8d3607-32c4-4e7f-a4db-9861ebf737cc/objects/0-ea-d10-e0083b1ba367f66b9d8974586fabe49f/views/imgpsh_fullsize' },
        { name: 'FRIENDS NATURE TRIP', url: 'https://as-prod.asyncgw.teams.microsoft.com/v1/9f8d3607-32c4-4e7f-a4db-9861ebf737cc/objects/0-jhb-d10-1bbf8c277d6e703d4a5c49dacc706b92/views/imgpsh_fullsize' },
        { name: 'HAPPINESS', url: 'https://as-prod.asyncgw.teams.microsoft.com/v1/9f8d3607-32c4-4e7f-a4db-9861ebf737cc/objects/0-jhb-d11-ef642591a7f2e70a81c284a42bb698df/views/imgpsh_fullsize' },
        { name: 'Old picture me and my Dad', url: 'https://as-prod.asyncgw.teams.microsoft.com/v1/9f8d3607-32c4-4e7f-a4db-9861ebf737cc/objects/0-ea-d11-ff2328403abc0a4c7dfb036ab530333a/views/imgpsh_fullsize' },
        { name: 'My first trip to Bicol', url: 'https://as-prod.asyncgw.teams.microsoft.com/v1/9f8d3607-32c4-4e7f-a4db-9861ebf737cc/objects/0-ea-d9-4ed8661b2f7b3daf2655b71f43bc72d3/views/imgpsh_fullsize' }
      ],

      // GUESTBOOK DATA: Modified from Shopping List
      visitorName: null,
      visitorComment: null,
      isPublic: false,
      guestbookEntries: [
        { name: 'Prof. J', comment: 'Great job on the midterm!', public: true, liked: false },
        { name: 'Classmate', comment: 'Love the Ghost Rider theme.', public: false, liked: true }
      ]
    }
  },
  methods: {
    // Modified addItem function
    addEntry() {
      let entry = {
        name: this.visitorName,
        comment: this.visitorComment,
        public: this.isPublic,
        liked: false
      }
      this.guestbookEntries.push(entry);
      
      // Clear the form
      this.visitorName = null;
      this.visitorComment = null;
      this.isPublic = false;
    },
    triggerMotivation() {
      alert("Keep pushing forward!");
      document.body.style.backgroundColor = "#ff6a00";
      setTimeout(() => { document.body.style.backgroundColor = "#0a0a0a"; }, 200);
    },
    handleScroll() {
      const sections = document.querySelectorAll('section');
      sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.7 && rect.bottom >= 0) {
          section.style.borderLeftColor = "#ffcc00"; 
        } else {
          section.style.borderLeftColor = "#e62117"; 
        }
      });
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  }
});

app.mount('#app');

