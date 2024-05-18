const ProductDetail = ({ produk }) => {

    const { kodeProduk, nama, harga } = produk
    const diskon = 50/100

    const hitungDiskon = () =>{
        const hasil = harga-(harga * diskon);
        alert(`Harga After diskon adalah: ${hasil}`)
    }
    const contohEvent = (e) => {
        console.log(e);
      }
    
      const contohEvent2 = (e, diskon) => {
        console.log("Event => ", e);
      }
  
    return (
      <>
        <h1>Product Detail</h1>
        <table>
          <tbody>
            <tr>
              <th>Kode Produk</th>
              <td onClick={(e) => contohEvent2(e, 30/100)}>{kodeProduk}</td>
            </tr>
            <tr>
              <th>Nama</th>
              <td onClick={contohEvent2}>{nama}</td>
            </tr>
            <tr>
              <th>Harga</th>
              <td onClick={hitungDiskon}>{harga}</td>
            </tr>
          
          </tbody>
        </table>
      </>
    )
  }
  
  export default ProductDetail;