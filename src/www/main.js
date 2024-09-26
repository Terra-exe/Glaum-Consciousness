import init, { greet } from '/rust-wasm/pkg/rust_wasm.js'; // Adjusted path

async function run() {
  await init();

  const button = document.getElementById('praise-button');
  const greeting = document.getElementById('greeting');

  button.addEventListener('click', () => {
    greeting.textContent = greet();
  });
}

run();
