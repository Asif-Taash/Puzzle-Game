# Puzzle Game

Bu proje, HTML, CSS ve JavaScript kullanılarak tarayıcıda çalışan basit bir yapboz oyunudur.  
Fikir, bir görüntüyü küçük parçalara bölmek ve karışık bir şekilde yerleştirdikten sonra, oyuncunun bu parçaları doğru sırayla yeniden düzenlemesidir. Parçalar sürüklenip bırakılarak yer değiştirilir.

## Oyunun Fikri

- Seçilen bir görsel (şu anda: **Spongebob**) kullanılır.
- Görsel önceden karelere bölünmüştür (2x2, 4x4 veya 8x8).
- Oyun başladığında, bu parçalar sayfada rastgele şekilde gösterilir.
- Kullanıcı herhangi bir parçayı alıp başka bir parçanın üzerine bırakabilir, böylece yerleri değişir.
- Her iki parça yer değiştirildiğinde bu bir deneme olarak sayılır.
- Oyuncu, özel bir butona basılı tutarak orijinal resmi görebilir.

## Dosya Açıklamaları

### 1. HTML Dosyası

Kullanıcı arayüzünü içerir.

İçindekiler:
- Logo görseli
- Yapbozun gösterildiği alan (`#kare` içinde)
- Seviye değiştirme butonları (2x2, 4x4, 8x8)
- Orijinal resmi gösterme butonu
- Yapbozu karıştırma butonu
- Deneme sayısını gösteren sayaç

---

### 2. JavaScript Dosyası

Oyunun tüm mantığını içerir.

#### Temel Değişkenler

- `sutun` ve `satir`: Seçilen seviyeye göre satır ve sütun sayısını belirler.
- `mevcutKare` ve `digerKare`: Sürükleme sırasında seçilen iki kareyi tutar.
- `deneme`: Yapılan hamle sayısını sayar.

#### Önemli Fonksiyonlar

- `ikiXiki`, `dortXdort`, `sekizXsekiz`:  
  Yapbozun büyüklüğünü (parça sayısını) belirler. Her biri `sutun` ve `satir` değerlerini ayarlar.

- `PuzzleOlustur(sutun, satir, sira = null)`:  
  Satır ve sütun sayısına göre yapbozu oluşturur.  
  Belirli bir sıra verilmemişse, parçalar karıştırılır ve bu sıra `localStorage`'a kaydedilir.  
  Bu fonksiyon, `#kare` içine `<img>` elemanları ekler ve her birine uygun parça resmini yükler.  
  Aynı zamanda `dragstart`, `drop`, `dragend` gibi olayları tanımlar ve sürükle bırak işlevini sağlar.

- `Karistir()`:  
  Deneme sayısını sıfırlar ve parçaları yeniden karıştırır.

- `Gosterme()` / `Durma()`:  
  Özel butona basıldığında orijinal resmi geçici olarak gösterir veya gizler.

- `window.onload`:  
  Sayfa açıldığında `localStorage` içinden son ayarlar alınır (seviye, denemeler, sıra).  
  Eğer veri yoksa oyun 4x4 seviyesinde başlatılır.

### 3. CSS Dosyası

Sayfa düzenlemeleri bu dosyada yapılmıştır.

- Açık renkler ve sade bir tasarım tercih edilmiştir.
- Parçaların boyutu seviyeye göre belirlenir:
  - 2x2 = her parça **400x400** piksel
  - 4x4 = her parça **200x200** piksel
  - 8x8 = her parça **100x100** piksel
- Butonlara fareyle gelindiğinde etkileşimli animasyonlar gösterilir.

## Kullanım Talimatları

1. Dosyaları bilgisayarınıza indirin.
2. `index.html` dosyasını tarayıcıda açın.
3. Oynamak istediğiniz seviyeyi seçin.
4. Parçaları sürükleyerek doğru sıralamaya getirin.
5. Yardıma ihtiyaç duyarsanız **"Orijinal Resim"** butonuna basılı tutun.
6. Oyunu sıfırlamak için **"Karıştır"** butonuna tıklayın.
7. Oyun verileri `localStorage` ile otomatik olarak kaydedilir.

## Ek Notlar

- Kullanılan görseller önceden parçalanmıştır. Yeni bir resim eklemek isterseniz, onu manuel olarak uygun parçalara bölüp örneğin `images/4X4` klasörüne yerleştirmeniz gerekir.
- Bu projede şu anda kazanma kontrolü (resmin tamamlandığına dair bir denetim) bulunmamaktadır. Fakat istenirse, parçaların sırası kontrol edilerek bu özellik eklenebilir.
- Kodun anlaşılabilir olması için sadece basit yapılar kullanılmıştır. Harici kütüphaneler veya derleyiciler kullanılmamıştır.
