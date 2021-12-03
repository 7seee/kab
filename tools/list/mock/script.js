var tabulate = function (data,columns) {
  var table = d3.select('body').append('table')
  var thead = table.append('thead')
  var tbody = table.append('tbody')

  thead.append('tr')
    .selectAll('th')
      .data(columns)
      .enter()
    .append('th')
      .text(function (d) { return d })

  var rows = tbody.selectAll('tr')
      .data(data)
      .enter()
    .append('tr')

  var cells = rows.selectAll('td')
      .data(function(row) {
        return columns.map(function (column) {

          row["リンク"] = `<a href='https://kabutan.jp/stock/chart?code=`+row['コード']+`' target='_blank'>株探</a>
          <a href='https://karauri.net/`+row['コード']+`/' target='_blank'>空売り残高</a>
          `;


          return { column: column, value: row[column] }
        })
      })
      .enter()
    .append('td')
      .html(function (d) { return d.value })

  return table;
}

d3.csv('data.csv',function (data) {
  var columns = ["コード","銘柄名","市場・商品区分","33業種区分","17業種区分","リンク"]
  tabulate(data,columns)
})

