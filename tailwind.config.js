@tailwind base;
@tailwind components;
@tailwind utilities;

/* Custom styles */
.particles-background {
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: -1;
  opacity: 0.3;
}

/* Custom components */
@layer components {
  .btn {
    @apply px-6 py-3 rounded-xl font-medium transition-all duration-300;
  }
  
  .btn-primary {
    @apply bg-primary text-white hover:bg-primary-dark hover:scale-105;
  }
  
  .btn-accent {
    @apply bg-accent text-dark font-semibold hover:scale-105;
  }
  
  .card {
    @apply bg-darker/80 backdrop-blur-sm border border-primary/20 rounded-xl shadow-lg hover:shadow-primary/20 transition-all duration-300;
  }
  
  .text-gradient {
    @apply bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent;
  }
}
