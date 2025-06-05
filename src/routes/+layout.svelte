<script>
  let {children} = $props();
  import { page } from '$app/stores';
  import { derived } from 'svelte/store';
  import './styles.css'
  // Aktuellen Pfad holen
  const pathname = derived(page, $page => $page.url.pathname);
</script>

<nav class="navbar navbar-expand-lg bg-dark navbar-dark" style="background-color: #e3f2fd;">
   <div class="container-fluid">
    <a class="navbar-brand active" class:active={$pathname === '/'} href="/">Yu-Gi-Oh! Deck Manager</a>
     <button
       class="navbar-toggler"
       type="button"
       data-bs-toggle="collapse"
       data-bs-target="#navbarNav"
       aria-controls="navbarNav"
       aria-expanded="false"
       aria-label="Toggle navigation"
     >
       <span class="navbar-toggler-icon"></span>
     </button>
     <div class="collapse navbar-collapse" id="navbarNav">
       <ul class="navbar-nav">
         <li class="nav-item">
          <a class="nav-link active" class:active={$pathname === '/decks'} href="/decks">Decks</a>
        </li>
         <li class="nav-item">
          <a class="nav-link active" class:active={$pathname === '/cards'} href="/cards">Cards</a>
        </li>
       </ul>
     </div>
   </div>
 </nav>

   <div class="container">
       {@render children()}
   </div>
