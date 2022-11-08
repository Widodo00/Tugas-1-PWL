import React from "react";
import Produk from "../Class/Produk";
import Blog from "./Blog";
import Karir from "./Karir";
import Percintaan from "./Percintaan";
import Tanggal from "./Tanggal";

const Home = () => {
  return (
    <div>
      {/* <Blog
        tanggal="02 Juni 2020"
        judul="Teknologi Blockchain"
        summary="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
      />
      <Blog
        tanggal="03 Juni 2020"
        judul="Teknologi IoT"
        summary="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
      />
      <Blog
        tanggal="04 Juni 2020"
        judul="Desain Pattern Laravel"
        summary="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
      /> */}
      <h1>Tanggal Kelahiran</h1>
      <Tanggal zodiak="Aries" tanggal="21 Maret hingga 19 April" />
      <Tanggal zodiak="Taurus" tanggal="20 April hingga 20 Mei" />
      <Tanggal zodiak="Gemini" tanggal="21 Mei hingga 20 Juni" />
      <Tanggal zodiak="Cancer" tanggal="21 Juni hingga 22 Juli" />
      <Tanggal zodiak="Leo" tanggal="23 Juli hingga 22 Agustus" />
      <Tanggal zodiak="Virgo" tanggal="23 Agustus hingga 22 September" />
      <Tanggal zodiak="Libra" tanggal="23 September hingga 22 Oktober" />
      <Tanggal zodiak="Scorpio" tanggal="23 Oktober hingga 22 November" />
      <Tanggal zodiak="Sagitarius" tanggal="23 November hingga 21 Desember" />
      <Tanggal zodiak="Capricorn" tanggal="22 Desember hingga 19 Januari" />
      <Tanggal zodiak="Aquarius" tanggal="20 Januari hingga 18 Februari" />
      <Tanggal zodiak="Pisces" tanggal="19 Februari hingga 20 Maret" />
      <br />
      <br />
      <h1>Percintaan</h1>
      <Percintaan
        zodiak="Aries"
        percintaan="jangan mudah percaya dengan perkataan seseorang yang baru kamu kenal. Kamu boleh sedikit memberikan kepercayaan setelah sedikit waktu."
      />
      <Percintaan
        zodiak="Taurus"
        percintaan="meskipun kamu tidak menyukainya, jangan menjawab ajakannya secara kasar. Hargai perasaan orang lain ya."
      />
      <Percintaan
        zodiak="Gemini"
        percintaan="jika berencana keluar dengan teman pdkt an yang baru kenal. Kamu harus berhati-hati dengan seseorang yang tidak terlalu jelas latar belakangnya."
      />
      <Percintaan
        zodiak="Cancer"
        percintaan="memiliki tanda-tanda akan menjalani sebuah hubungan. Hubungan ekstra romantis dan peduli."
      />
      <Percintaan
        zodiak="Leo"
        percintaan="hubungan akan jadi lebih baik ketika berawal dengan baik. Oleh karena itu, usahakan kamu memulai hubungan dengan murni."
      />
      <Percintaan
        zodiak="Virgo"
        percintaan="tidak usah mendengarkan omongan orang yang merendahkanmu. Mungkin mereka beranggapan kamu tidak memiliki daya tarik tapi sebenarnya kamu secara alami sangat menawan."
      />
      <Percintaan
        zodiak="Libra"
        percintaan="akan bertemu dengan cinta lama yang telah hilang. Persiapkan hatimu sebaik mungkin."
      />
      <Percintaan
        zodiak="Scorpio"
        percintaan="jangan ragu untuk mengatakan tidak. Kamu berhak menolak seseorang yang tidak kamu sukai."
      />
      <Percintaan
        zodiak="Sagitarius"
        percintaan="Terburu-buru menentukan pilihan tidak ada untungnya bagimu. Yakinkan hatimu agar tidak salah pilih pasangan."
      />
      <Percintaan
        zodiak="Capricorn"
        percintaan="sudah memulai hubungan dengan orang baru. Kamu berhak bahagia."
      />
      <Percintaan
        zodiak="Aquarius"
        percintaan="tidak pernah setengah-setengah ketika sudah mencintai seseorang. Sayangnya kamu terlalu terburu-buru dalam memberikan penilaian."
      />
      <Percintaan
        zodiak="Pisces"
        percintaan="tidak mengabaikan orang yang benar-benar serius denganmu. Kamu bisa sedikit membuka hati dan memberikan kesempatan."
      />
      <br />
      <br />
      <h1>Karir</h1>
      <Karir
        zodiak="Aries"
        karir="Kamu mungkin akan menjalin pertemanan hari ini. Akan ada seseorang yang tulus mendatangimu secara tiba-tiba di kantor."
      />
      <Karir
        zodiak="Taurus"
        karir="jika kamu bekerja dalam bidang finansial, kamu akan mengalami perubahan yang baik hari ini. Kamu lebih baik dalam menganalisis anggaran."
      />
      <Karir
        zodiak="Gemini"
        karir="sedang baik, apa yang kamu impikan sudah tercapai. Namun sepertinya kamu ingin menambah lonjakan baru sehingga belum benar-benar tenang."
      />
      <Karir
        zodiak="Cancer"
        karir="akan ada kesempatan bagimu untuk naik dalam karir hari ini. Jangan berlebihan dalam mengemukakan pendapat."
      />
      <Karir
        zodiak="Leo"
        karir="mungkin sedikit tidak membaik pada hari ini, hindari melakukan kesalahan sebisa mungkin. Ramalan mengatakan kamu akan mengalami sial."
      />
      <Karir
        zodiak="Virgo"
        karir="jangan ragu untuk mengungkapkan pendapatmu pada rekan kerja. Kamu harus terlihat aktif dan memiliki pendirian agar dihargai."
      />
      <Karir
        zodiak="Libra"
        karir="meskipun kamu memiliki banyak teman kerja yang baik, jangan sampai kamu bertingkah berlebihan. Ini sebenarnya seperti jebakan."
      />
      <Karir
        zodiak="Scorpio"
        karir="meskipun karirmu sedang baik, kamu tidak boleh dengan tugas-tugas yang diberikan atasan. Tetap berikan kinerja terbaikmu."
      />
      <Karir
        zodiak="Sagitarius"
        karir="jangan pernah menunjukkan kekecewaanmu secara terang-terangan pada atasan. Hal itu sudah biasa antara karyawan dan atasan, kamu harus bisa mengontrolnya agar tidak semakin runyam."
      />
      <Karir
        zodiak="Capricorn"
        karir="meskipun karirmu sedang baik dan kamu senang dengan pekerjaanmu. Tidak ada salahnya jika kamu menambah skill."
      />
      <Karir
        zodiak="Aquarius"
        karir="kamu sangat menikmati pekerjaanmu, kamu semangat dalam menjalani hari-hari. Tentunya kamu juga tidak boleh mengabaikan kesehatan."
      />
      <Karir
        zodiak="Pisces"
        karir="meskipun apa yang kamu harapkan tidak berjalan dengan semestinya, Kamu tidak boleh patah semangat. Terus lakukan yang terbaik."
      />
    </div>
  );
};

export default Home;
