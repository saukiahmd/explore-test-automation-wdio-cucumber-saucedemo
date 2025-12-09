import { $, expect } from '@wdio/globals'
import Page from './page.js';


/**
 * sub page containing specific selectors and methods for a specific page
 */
class productListPage extends Page {
    /**
     * define selectors using getter methods
     */

    get imageProduct () {
        return $$('.inventory_container .inventory_list .inventory_item .inventory_item_img a img');
    }

    get nameProduct () {
        return $$('.inventory_container .inventory_list .inventory_item .inventory_item_description .inventory_item_label a .inventory_item_name');
    }

    get descProduct () {
        return $$('.inventory_container .inventory_list .inventory_item .inventory_item_description .inventory_item_label .inventory_item_desc');
    }

    get priceProduct () {
        return $$('.inventory_container .inventory_list .inventory_item .inventory_item_description .pricebar .inventory_item_price');
    }

    get btnAddToCart () {
        return $$('.inventory_container .inventory_list .inventory_item .inventory_item_description .pricebar button');
    }

    get btnSortContainer () {
        return $$('.product_sort_container option');
    }

    /**
     * verifikasi setiap produk memiliki nama, harga, dan tombol 'Add to cart'
     */
    async verificationPLP () {
        // Verifikasi container produk sebelum masuk ke proses looping data
        await super.elementShouldDisplayed($('.inventory_container .inventory_list'));

        // Penting: ambil semua elemen di awal.
        // Jika getter dipanggil di dalam loop, DOM bisa berubah (jumlah item bisa turun dari 6 ke 5).
        // Dengan snapshot seperti ini, loop jadi stabil dan konsisten.
        const imageProduct = await this.imageProduct;
        const nameProduct = await this.nameProduct;
        const descProduct = await this.descProduct;
        const priceProduct = await this.priceProduct;
        const btnAddToCart = await this.btnAddToCart;

        // Loop melalui setiap produk dan verifikasi elemen-elemen pentingnya & pastikan ada data produknya
        const cardProduct = await $$('.inventory_container .inventory_list .inventory_item');
        const productCount = await cardProduct.length;
        console.log('Total produk ditemukan: ' + productCount);
        if (productCount === 0) {
            throw new Error('Tidak ada produk yang ditemukan di halaman produk.');
        }else {
        for (let i = 0; i < productCount; i++) {
            console.log('Produk ke-' + (i));
            console.log('Product Name:' + await nameProduct[i].getText());
                await expect(imageProduct[i]).toBeDisplayed();
                await expect(nameProduct[i]).toBeDisplayed();
                await expect(descProduct[i]).toBeDisplayed();
                await expect(priceProduct[i]).toBeDisplayed();
                await expect(btnAddToCart[i]).toBeDisplayed();
            }
        }
    }

    async sortOptions(sortOption) {
        const btnSortContainer = await this.btnSortContainer;
        console.log('Available sort options:' + await btnSortContainer.length);
        const btnSortContainerCount = btnSortContainer.length;
        for (let i = 0; i < btnSortContainerCount; i++) {
            const optionText = await btnSortContainer[i].getText();
            if (optionText === sortOption) {
                await btnSortContainer[i].click();
                console.log(`Sorted by option: ${optionText}`);
                break;
            }
        }
    }

    async verificationSortingNameZToA() {
        const nameProductElements = await this.nameProduct;
        const nameProductsSystem = [];
        const nameProductsManual = [];

        /// ambil dulu semua elemen nama produk yang sudah di sorting melalui website lalu simpan ke array 
        for (let i = 0; i < nameProductElements.length; i++) {
                const nameText = await nameProductElements[i].getText();
                nameProductsSystem.push(nameText);
                nameProductsManual.push(nameText);
            }
            
        /// setelah itu bandingkan data array dengan data yang sudah di sorting secara system dengan data yang sudah di sorting secara manual
        const sortedNames = nameProductsManual.sort().reverse();
        console.log('Nama produk sorting by system: ', nameProductsSystem);
        console.log('Nama produk sorting manual: ', sortedNames);
        expect(nameProductsSystem).toEqual(sortedNames);
    }

    async verificationSortingNameAToZ() {
        const nameProductElements = await this.nameProduct;
        const nameProductsSystem = [];
        const nameProductsManual = [];

        /// ambil dulu semua elemen nama produk yang sudah di sorting melalui website lalu simpan ke array 
        for (let i = 0; i < nameProductElements.length; i++) {
                const nameText = await nameProductElements[i].getText();
                nameProductsSystem.push(nameText);
                nameProductsManual.push(nameText);
            }
            
        /// setelah itu bandingkan data array dengan data yang sudah di sorting secara system dengan data yang sudah di sorting secara manual
        const sortedNames = nameProductsManual.sort();
        console.log('Nama produk sorting by system: ', nameProductsSystem);
        console.log('Nama produk sorting manual: ', sortedNames);
        expect(nameProductsSystem).toEqual(sortedNames);
    }

    async verificationSortingPriceHighToLow() {
        const priceProductElements = await this.priceProduct;
        const priceProductSystem = [];
        const priceProductManual = [];

        /// ambil dulu semua elemen harga produk yang sudah di sorting melalui website lalu simpan ke array 
        for (let i = 0; i < priceProductElements.length; i++) {
                const priceText = await priceProductElements[i].getText();
                priceProductSystem.push(priceText);
                priceProductManual.push(priceText);
            }
        

        /// split atau keluarkan text yang ada di dalam price buat menjadi tipe data float/number
        const sortedManual = priceProductManual
        .map(v => parseFloat(v.replace('$', ''))) // ubah ke number
        .sort((a, b) => a + b); // sort numerik descending
        const sortedSystem = priceProductSystem.map(v => parseFloat(v.replace('$', ''))) // ubah ke number

        /// setelah itu bandingkan data array dengan data yang sudah di sorting secara system dengan data yang sudah di sorting secara manual
        console.log('Harga produk sorting by system: ', sortedSystem);
        console.log('Harga produk sorting manual: ', sortedManual);
        expect(sortedSystem).toEqual(sortedManual);
    }

    async verificationSortingPriceLowToHigh() {
        const priceProductElements = await this.priceProduct;
        const priceProductSystem = [];
        const priceProductManual = [];

        /// ambil dulu semua elemen harga produk yang sudah di sorting melalui website lalu simpan ke array 
        for (let i = 0; i < priceProductElements.length; i++) {
                const priceText = await priceProductElements[i].getText();
                priceProductSystem.push(priceText);
                priceProductManual.push(priceText);
            }
        

        /// split atau keluarkan text yang ada di dalam price buat menjadi tipe data float/number
        const sortedManual = priceProductManual
        .map(v => parseFloat(v.replace('$', ''))) // ubah ke number
        .sort((a, b) => a - b); // sort numerik ascending
        const sortedSystem = priceProductSystem.map(v => parseFloat(v.replace('$', ''))) // ubah ke number

        /// setelah itu bandingkan data array dengan data yang sudah di sorting secara system dengan data yang sudah di sorting secara manual
        console.log('Harga produk sorting by system: ', sortedSystem);
        console.log('Harga produk sorting manual: ', sortedManual);
        expect(sortedSystem).toEqual(sortedManual);
    }
    
}

export default new productListPage();