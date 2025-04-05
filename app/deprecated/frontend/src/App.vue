<template>
  <h1>Hello App!</h1>
  <p><strong>Current route path:</strong> {{ $route.fullPath }}</p>

  <nav>
    <RouterLink to="/">Go to Home</RouterLink>
    <RouterLink to="/about">Go to About</RouterLink>
    <RouterLink to="/hello">Go to Hello</RouterLink>
  </nav>

  <main>
    <RouterView />
  </main>
</template>

<script>
export default {
  name: 'App'
};
</script>

<style>
/* Estilos generales */
body {
  font-family: "Poppins", sans-serif;
  margin: 0;
  padding: 0;
  background-color: #f8f9fa;
  color: #333;
  text-align: center;
}

/* Contenedor principal */
#app {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 20px;
}

/* Estilos para la navegación */
nav {
  margin: 20px 0;
  display: flex;
  gap: 15px;
  padding: 10px;
  background-color: #2c3e50;
  border-radius: 8px;
}

nav a {
  text-decoration: none;
  color: white;
  font-weight: bold;
  padding: 10px 15px;
  border-radius: 5px;
  transition: background 0.3s ease;
}

nav a:hover {
  background-color: #1a252f;
}

/* Página principal */
main {
  background: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 600px;
}
</style>
