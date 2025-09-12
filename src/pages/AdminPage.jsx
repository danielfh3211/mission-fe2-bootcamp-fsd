import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const placeholderImage = "https://picsum.photos/600/400";
const LOCAL_KEY = "products";

export default function AdminPage() {
  const [products, setProducts] = useState(() => {
    const stored = localStorage.getItem(LOCAL_KEY);
    return stored ? JSON.parse(stored) : [];
  });

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [editId, setEditId] = useState(null);

  useEffect(() => {
    localStorage.setItem(LOCAL_KEY, JSON.stringify(products));
  }, [products]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim() || !price.trim()) return;

    if (editId) {
      setProducts(
        products.map((p) =>
          p.id === editId ? { ...p, name, price: Number(price) } : p
        )
      );
      setEditId(null);
    } else {
      setProducts([
        ...products,
        {
          id: Date.now(),
          name,
          price: Number(price),
          image: `https://picsum.photos/seed/${Date.now()}/600/400`,
        },
      ]);
    }
    setName("");
    setPrice("");
  };

  const handleEdit = (product) => {
    setEditId(product.id);
    setName(product.name);
    setPrice(String(product.price));
  };

  const handleDelete = (id) => {
    if (window.confirm("Hapus produk ini?")) {
      setProducts(products.filter((p) => p.id !== id));
    }
  };

  return (
    <>
      <Header />
      <div className="adminpage-bg">
        <div className="adminpage-container">
          <div className="adminpage-header">
            <h1>Manajemen Produk Kursus</h1>
            <p>Tambah, edit, atau hapus produk kursus Anda.</p>
          </div>

          <div className="admin-form-container">
            <h2>{editId ? "Edit Produk" : "Tambah Produk Baru"}</h2>
            <form onSubmit={handleSubmit} className="admin-form">
              <div className="admin-form-group">
                <label>Nama Produk</label>
                <input
                  type="text"
                  placeholder="Contoh: Kursus React"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="admin-form-group">
                <label>Harga (Rp)</label>
                <input
                  type="number"
                  placeholder="Contoh: 200000"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                />
              </div>
              <div className="admin-form-group">
                <button type="submit" className="btn-primary">
                  {editId ? "Simpan Perubahan" : "Tambah Produk"}
                </button>
                {editId && (
                  <button
                    type="button"
                    onClick={() => {
                      setEditId(null);
                      setName("");
                      setPrice("");
                    }}
                    className="btn-secondary"
                  >
                    Batal
                  </button>
                )}
              </div>
            </form>
          </div>

          <div className="product-grid">
            {products.length > 0 ? (
              products.map((product) => (
                <div key={product.id} className="product-card">
                  <img
                    src={product.image || placeholderImage}
                    alt={product.name}
                    className="product-img"
                  />
                  <div className="product-card-body">
                    <h3>{product.name}</h3>
                    <p className="product-price">
                      Rp {new Intl.NumberFormat("id-ID").format(product.price)}
                    </p>
                  </div>
                  <div className="product-card-footer">
                    <button
                      onClick={() => handleEdit(product)}
                      className="btn-edit"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(product.id)}
                      className="btn-delete"
                    >
                      Hapus
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <div className="product-empty">
                <p className="font-semibold">Belum ada produk</p>
                <p className="text-sm">
                  Gunakan formulir di atas untuk menambahkan produk pertama
                  Anda.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
