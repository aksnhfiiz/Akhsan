new Vue({
    el: '#app',
    data: {
      nota: '',
      pelanggan: '',
      tanggal: '',
      items: [
        { id: '001', nama: 'Tumis Kangkung', harga: 5000 },
        { id: '002', nama: 'Sate Ayam', harga: 2000 },
        { id: '003', nama: 'Bubur', harga: 8000 },
        { id: '004', nama: 'Teh Manis', harga: 1500 },
      ],
      selectedItem: { id: '', nama: '', harga: 0 },
      quantity: 0,
      invoiceItems: [],
      diskon: 0,
      bayar: 0
    },
    computed: {
      subTotal() {
        return this.invoiceItems.reduce((sum, item) => sum + (item.harga * item.qty), 0);
      },
      diskonAmount() {
        return this.subTotal * (this.diskon / 100);
      },
      totalHarga() {
        return this.subTotal - this.diskonAmount;
      },
      totalPembayaran() {
        return this.totalHarga;
      },
      kembalian() {
        return this.bayar - this.totalHarga;
      }
    },
    methods: {
      addItem() {
        if (this.selectedItem && this.quantity > 0) {
          this.invoiceItems.push({ ...this.selectedItem, qty: this.quantity });
          this.selectedItem = { id: '', nama: '', harga: 0 };
          this.quantity = 1;
        }
      },
      removeItem(index) {
        this.invoiceItems.splice(index, 1);
      },
      completeTransaction() {
        alert('Transaksi selesai!');
        // You can add more functionality here to handle the completion of the transaction
      }
    }
  });
  