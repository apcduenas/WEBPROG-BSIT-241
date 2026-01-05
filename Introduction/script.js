const { createApp } = Vue;

const app = createApp({
  data() {
    return {
      // MIDTERM IMAGES - These match your requested links exactly
      midtermGallery: [
        { 
          name: 'FRIENDS NATURE TRIP', 
          url: 'https://as-prod.asyncgw.teams.microsoft.com/v1/9f8d3607-32c4-4e7f-a4db-9861ebf737cc/objects/0-jhb-d10-1bbf8c277d6e703d4a5c49dacc706b92/views/imgpsh_fullsize' 
        },
        { 
          name: 'HAPPINESS', 
          url: 'https://as-prod.asyncgw.teams.microsoft.com/v1/9f8d3607-32c4-4e7f-a4db-9861ebf737cc/objects/0-jhb-d11-ef642591a7f2e70a81c284a42bb698df/views/imgpsh_fullsize' 
        },
        { 
          name: 'Old picture me and my Dad', 
          url: 'https://as-prod.asyncgw.teams.microsoft.com/v1/9f8d3607-32c4-4e7f-a4db-9861ebf737cc/objects/0-ea-d11-ff2328403abc0a4c7dfb036ab530333a/views/imgpsh_fullsize' 
        },
        { 
          name: 'My first trip to Bicol', 
          url: 'https://as-prod.asyncgw.teams.microsoft.com/v1/9f8d3607-32c4-4e7f-a4db-9861ebf737cc/objects/0-ea-d9-4ed8661b2f7b3daf2655b71f43bc72d3/views/imgpsh_fullsize' 
        }
      ],

      // SKILLS LIST (Converted from your Shopping List example)
      newItemName: '',
      skillsList: [
        { name: 'HTML5', important: true, found: true },
        { name: 'CSS3', important: true, found: true },
        { name: 'JavaScript', important: true, found: false },
        { name: 'Vue.js', important: false, found: false }
      ]
    }
  },
  methods: {
    // Logic for adding a new skill
    addSkill() {
      if (this.newItemName.trim() !== '') {
        this.skillsList.push({
          name: this.newItemName,
          important: false,
          found: false
        });
        this.newItemName = '';
      }
    },

    // Logic for the Motivation Button
    triggerMotivation() {
      alert("Keep pushing forward and never give up on your dreams!");
      // Flash effect
      document.body.style.backgroundColor = "#ff6a00";
      setTimeout(() => {
        document.body.style.backgroundColor = "#0a0a0a";
      }, 200);
    },

    // Logic for the Glowing Scroll Effect
    handleScroll() {
      const sections = document.querySelectorAll('section');
      sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        // If the section is in the middle of the screen
        if (rect.top < window.innerHeight * 0.7 && rect.bottom >= 0) {
          section.style.borderLeftColor = "#ffcc00"; // Glow Yellow
          section.style.boxShadow = "0 0 20px rgba(255, 106, 0, 0.2)";
        } else {
          section.style.borderLeftColor = "#e62117"; // Back to Red
          section.style.boxShadow = "none";
        }
      });
    }
  },
  mounted() {
    // When the page loads, start listening for scrolls
    window.addEventListener('scroll', this.handleScroll);
  },
  unmounted() {
    // Clean up to prevent memory leaks
    window.removeEventListener('scroll', this.handleScroll);
  }
});

app.mount('#app');