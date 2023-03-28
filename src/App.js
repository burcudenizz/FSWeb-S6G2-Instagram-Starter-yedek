/* 
  Buradan başlayın ve iç içe geçmiş bileşenlere doğru ilerleyin.
  Projedeki tüm dosyalara kod eklenmesi gerekmez.
  Nerelerde değişiklik yapmanız gerektiğini anlamak için her dosyayı inceleyin.
*/

// State hook u import edin
import React, { useState } from "react";

// Gönderiler (çoğul!) ve AramaÇubuğu bileşenlerini import edin, çünkü bunlar App bileşeni içinde kullanılacak
// sahteVeri'yi import edin
import sahteVeri from "./sahte-veri";
import Gönderiler from "./bileşenler/Gönderiler/Gönderiler.js";
import AramaÇubuğu from "./bileşenler/AramaÇubuğu/AramaÇubuğu";

import "./App.css";

const App = () => {
  const [gonderiler, setGonderi] = useState(sahteVeri);
  // Gönderi nesneleri dizisini tutmak için "gonderiler" adlı bir state oluşturun, **sahteVeri'yi yükleyin**.
  // Artık sahteVeri'ye ihtiyacınız olmayacak.
  // Arama çubuğunun çalışması için , arama kriterini tutacak başka bir state'e ihtiyacımız olacak.

  const gonderiyiBegen = (gonderiID) => {
    const updGond = [...gonderiler];
    updGond.map((g) => {
      if (g.id == gonderiID) {
        g.likes = g.likes + 1;
      }
    });
    setGonderi(updGond);
  };

  return (
    <div className="App">
      {/* AramaÇubuğu ve Gönderiler'i render etmesi için buraya ekleyin */}
      <AramaÇubuğu />
      {/* Her bileşenin hangi proplara ihtiyaç duyduğunu kontrol edin, eğer ihtiyaç varsa ekleyin! */}
      <Gönderiler postLikeFnCb={gonderiyiBegen} posts={gonderiler} />
    </div>
  );
};

export default App;
