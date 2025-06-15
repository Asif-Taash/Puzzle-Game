# Puzzle-Game

Bu oyun, HTML, CSS ve JavaScript kullanılarak yapılmış etkileşimli bir puzzle oyunudur. Amaç, karışık şekilde yerleştirilmiş kareleri sürükleyip bırakarak orijinal resmi doğru şekilde yeniden düzenlemektir. Eğlenceli bir oyun olup, odaklanma ve ince motor becerilerini geliştirmeye yardımcı olur.

## Oyunun Genel Açıklaması
- Sayfa açıldığında, oyuncunun seçebileceği 3 seçenekten biriyle (2x2, 4x4 veya 8x8) büyük bir resim (örneğimizde SpongeBob) karelere bölünür.  
- Her kare, orijinal resmin bir parçasıdır.  
- Oyun, bu kareleri rastgele karıştırarak başlar ve oyuncu, kareleri doğru sırayla yerleştirmek için bir kareyi sürükleyip diğerinin üzerine bırakmalıdır.  
- Oyuncunun yaptığı deneme sayısı, üstte "Deneme" kelimesinin yanında gösterilir.  
- "Karistir" butonu kareleri tekrar karıştırır, "Orijinal Resim" butonuna basılı tutulduğunda ise orijinal resim geçici olarak gösterilir, bırakınca kaybolur.

## Program Bileşenleri Detayları

### 1. HTML Dosyası
- Sayfanın yapısını belirler:  
  - Oyunun logosu.  
  - Puzzle parçalarının göründüğü oyun alanı.  
  - Geçici gösterilebilen gizli orijinal resim.  
  - Karıştırma, resmi gösterme ve zorluk seviyesi seçme (2x2, 4x4, 8x8) butonları.

### 2. CSS Dosyası
- Oyunun tasarımından sorumludur:  
  - Göze hoş gelen uyumlu renkler seçilmiştir.  
  - Sabit boyutta, yuvarlatılmış köşeli oyun alanı tasarlanmıştır.  
  - Butonlar üzerinde fareyle üzerine gelindiğinde renk değişikliği ile kullanıcı deneyimi iyileştirilmiştir.  
  - Oyunun boyutu, ekran boyutuna göre bozulmadan ayarlanır.

### 3. JavaScript Dosyası
- Oyunun mantığını içerir:

#### Temel Değişkenler:
- `sutun` ve `satir`: Puzzle’ın sütun ve satır sayısını (kare sayısını) tutar.  
- `mevcutKare` ve `digerKare`: Sürüklenen ve bırakılan kareleri takip eder.  
- `deneme`: Oyuncunun yaptığı deneme sayısını sayar.

#### Oyun Kurma Fonksiyonları:
- `ikiXiki()`, `dortXdort()`, `sekizXsekiz()`: Her biri oyunun zorluk seviyesini belirler ve yeni bir puzzle oluşturur.  
- `PuzzleOlustur(sutun, satir)`:  
  - Kareleri temsil eden sayılar listesi oluşturur (1’den kare sayısına kadar).  
  - Bu listeyi rastgele karıştırır.  
  - Her kare için uygun resim parçası `<img>` elementi oluşturur.  
  - Karelerin boyutunu sütun ve satır sayısına göre ayarlar.  
  - Sürükle-bırak olaylarını (`dragstart`, `dragover`, `drop`, `dragend`) dinleyerek karelerin yer değiştirmesine izin verir.

#### Sürükle ve Bırak İşleyişi:
- `dragstart`: Sürüklenen kare kaydedilir.  
- `drop`: Bırakılan hedef kare kaydedilir.  
- `dragend`: İki karenin resimleri değiştirilir (aynı kare değilse).  
- Her değişiklikten sonra deneme sayısı artırılır ve ekranda güncellenir.

#### Ek Fonksiyonlar:
- `Karistir()`: Kareleri yeniden karıştırır ve deneme sayısını sıfırlar.  
- `Gosterme()` ve `Durma()`: "Orijinal Resim" butonuna basılı tutulduğunda resmi gösterir, bırakınca gizler.

## Oyunun Kullanımı
1. HTML dosyasını modern bir tarayıcıda (Chrome, Firefox, Edge) açın.  
2. Oyun otomatik olarak 4x4 seviyesinde başlar.  
3. Kare sayısını değiştirmek için seviye butonlarını kullanın:  
   - 2x2: Başlangıç için büyük kareler.  
   - 4x4: Orta seviye.  
   - 8x8: Uzman seviyesi, küçük ve çok kare.  
4. Bir kareyi sürükleyip başka bir karenin üzerine bırakın.  
5. Deneme sayısı üstte "Deneme" yanında gösterilir.  
6. İsterseniz "Karistir" butonuna basarak karışımı yenileyebilirsiniz.  
7. "Orijinal Resim" butonuna basılı tutarak resmi tam olarak görebilirsiniz.  
8. Amaç, kareleri en az denemeyle doğru sıraya getirmektir.

## Oyunun Yapılışı
- Resmi karelere bölüp, her kareyi ayrı bir resim olarak kullanarak basit ve klasik bir puzzle yöntemi uygulanmıştır.  
- DOM olayları kullanılarak sürükle bırak fonksiyonu gerçekleştirilmiştir.  
- Flexbox ile karelerin düzeni ekran boyutuna göre esnek şekilde ayarlanmıştır.  
- Kullanıcı deneyimine özen gösterilerek etkileşimler, deneme sayısı ve orijinal resim gösterimi sağlanmıştır.

## Teknik Notlar
- Oyun, farklı zorluk seviyeleri için aşağıdaki klasör yapısında kesilmiş görsellere ihtiyaç duyar:  
  - `images/2X2/`, `images/4X4/`, `images/8X8/`
- Her klasörde, ilgili seviyeye uygun şekilde bölünmüş kare görselleri yer almalıdır.
- Orijinal resmin çözünürlüğü **800x800 piksel** olmalıdır; bu, tüm karelerin düzenli ve net görünmesini sağlar.
- Proje; mevcut haliyle çalışır ve tamamlanmış bir yapı sunar. Ancak istenirse gelecekte aşağıdaki gibi işlevsellikler entegre edilebilir:
  - Zamanlayıcı (oyun süresi takibi),
  - Oyun ilerlemesini kaydetme,
  - Ses efektleri gibi kullanıcı deneyimini artıran özellikler.
