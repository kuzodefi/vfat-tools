$(function() {
  main()
});

const main = async() => {

  let tableData = {
    "title":"Cronos Network",
    "heading":["Pool Provider","LP", "Reward Tokens", "INFO"],
    "rows": [
      ["CrodexSwap           ", `<a href='crodex'     >Various</a>`,"CRX          ","https://swap.crodex.app"],
      ["VVS Finance          ", `<a href='vvs'        >Various</a>`,"VVS          ","https://vvs.finance"],
      ["CroFarm              ", `<a href='crofarm'    >Various</a>`,"CRF          ","https://crofarm.app"]
    ]
  }

  let table = new AsciiTable().fromJSON(tableData);
  document.getElementById('log').innerHTML += table + '<br />';
  hideLoading();
}