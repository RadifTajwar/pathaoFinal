const PRODUCTS_STORAGE_KEY = 'products';

export default {
  namespaced: true,
  state: {
    products: JSON.parse(localStorage.getItem(PRODUCTS_STORAGE_KEY)) || [],
    loading: false,
    error: null,
  },
  mutations: {
    setProducts(state, products) {
      state.products = products;
      localStorage.setItem(PRODUCTS_STORAGE_KEY, JSON.stringify(products));
    },
    setLoading(state, status) {
      state.loading = status;
    },
    setError(state, error) {
      state.error = error;
    },
    updateProduct(state, updatedProduct) {
      const index = state.products.findIndex(p => Number(p.id) === Number(updatedProduct.id));
      if (index !== -1) {
        state.products.splice(index, 1, updatedProduct);
        localStorage.setItem(PRODUCTS_STORAGE_KEY, JSON.stringify(state.products));
      }
    },
    deleteProduct(state, productId) {
      const index = state.products.findIndex(p => Number(p.id) === Number(productId));
      if (index !== -1) {
        state.products.splice(index, 1);
        localStorage.setItem(PRODUCTS_STORAGE_KEY, JSON.stringify(state.products));
      }
    },
    addProduct(state, newProduct) {
      // Generate a new unique id if not provided:
      if (!newProduct.id) {
        // Find max id in current products, increment by 1
        const maxId = state.products.reduce((max, p) => Math.max(max, Number(p.id)), 0);
        newProduct.id = maxId + 1;
      }
      state.products.push(newProduct);
      localStorage.setItem(PRODUCTS_STORAGE_KEY, JSON.stringify(state.products));
    }
  },
  actions: {
    async fetchProducts({ state, commit }) {
      if (state.products.length > 0) {
        return;
      }

      commit('setLoading', true);
      commit('setError', null);

      try {
        const response = await fetch("https://fakestoreapi.com/products");
        if (!response.ok) throw new Error("Failed to fetch products");

        let prods = await response.json();

        prods = prods.map(p => ({
          ...p,
          originalPrice: p.price * 1.1,
        }));

        commit('setProducts', prods);
      } catch (err) {
        commit('setError', err.message || "Error loading products");
      } finally {
        commit('setLoading', false);
      }
    },

    updateProduct({ commit }, updatedProduct) {
      commit('updateProduct', updatedProduct);
    },

    deleteProduct({ commit }, productId) {
      commit('deleteProduct', productId);
    },

    addProduct({ commit }, newProduct) {
      return new Promise((resolve) => {
        commit('addProduct', newProduct);
        resolve();
      });
    }
  },
  getters: {
    products: state => state.products,
    loading: state => state.loading,
    error: state => state.error,
  }
}
