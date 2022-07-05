process.stdout.write('hello from spinner1.js... \rheyyy\n');
const arr = ['\r|', '\r/', '\r-', '\r\\'];
for (let i in arr) {
  setTimeout(() => {
    process.stdout.write(arr[i]);
  }, 100 + i * 200);
}

