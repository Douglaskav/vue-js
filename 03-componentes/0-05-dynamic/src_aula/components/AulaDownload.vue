<template>
  <div>
    <p>Faça o download dos arquivos.</p>
    <button>Download</button>
  </div>
</template>

<script>
export default {
  name: "AulaDownload",
  destroyed() {
    console.log("Download Destruido");
  },
};
</script>

<style></style>
