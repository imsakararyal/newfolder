import i18n from 'i18next';
import {reactI18nextModule} from 'react-i18next';
//import locale from 'react-native-locale-detector';
import {AsyncStorage} from 'react-native';
//import Events from "../screens/events";

// creating a language detection plugin using expo
// http://i18next.com/docs/ownplugin/#languagedetector
/*const languageDetector = {
    init: Function.prototype,
    type: 'languageDetector',
    async: false, // flags below detection to be async
    detect: async (callback) => {
        const savedDataJSON = await AsyncStorage.getItem('language');
        const lng = (savedDataJSON) ? JSON.parse(savedDataJSON): null;
        const selectLanguage = lng || locale;
        console.log('detect - selectLanguage:', selectLanguage);
        callback(selectLanguage);
    },
    cacheUserLanguage: () => {}
}*/
const savedDataJSON = AsyncStorage.getItem('language');
console.log('SAVEDDATAJSON'+savedDataJSON);
const STORAGE_KEY = 'language';
AsyncStorage.getItem(STORAGE_KEY, (err, key) => {
  if (key != null) {
    i18n.changeLanguage(key);
  }
}).done();
i18n
  //  .use(savedDataJSON)
    .use(reactI18nextModule)
    .init({
        fallbackLng: 'en',

        resources: {
            en: {
                sidebar: {
                    home: 'Home',
                    construction_library: 'Construction Library',
                    documents: 'Documents',
                    site_safety: 'Site Safety',
                    news: 'News',
                    in_risk: 'In Risk',
                    statistics: 'Statistics',
                    faq: 'Faq',
                    columbia_form: 'Home Survey Form',
                    help: 'Help',

                    log_in:'Log In',

                },
                home: {
                    title: 'Home',
                    construction_library: 'Construction Library',
                    documents: 'Documents',
                    site_safety: 'Site Safety',
                    news: 'News',
                    in_risk: 'In Risk',
                    statistics: 'Statistics',
                    faq: 'Faq',
                    columbia_form: 'Columbia Form',
                    help: 'Help',


                    list:'List',
                    grid:'Grid',


                    total_statistics:'Total Statistics',


                    total_request:'Total Request',
                    total_design:'Total Design',
                    sucess_stories:'Sucess Stories',
                    app_download:'App Downloads'
                },
                construction_library:{
                    title: 'Construction Library',
                    technology:'Technology',
                    technology_select:'Please Select Technology',
                    confined_masonry:'Confined Masonry',
                    timber:'Timber',
                    no_of_floor:'Number of Floor',
                    floor_select:'Please Select Floor',
                    one_floor:'1 Floor',
                    two_floor:'2 Floor',
                    type_of_house:'Type of House',
                    house_select:'Please Select House',
                    type_36:'Type 36',
                    type_45:'Type 45',
                    type_54:'Type 54',
                    type_of_bedroom:'Type of Bedroom',
                    bedroom_select:'Please select Bedroom',
                    one_bedroom:'1 bedroom',
                    two_bedroom:'2 bedroom',
                    three_bedroom:'3 bedroom',
                    four_bedroom:'4 bedroom',
                    toilet_access:'Toilet Access',
                    inside:'Inside',
                    outside:'Outside',
                    terrace_location:'Terrace Location',
                    front_terrace:'Front Terrace',
                    back_terrace:'Back Terrace',
                    side_terrace:'Side Terrace',
                lot_size:'Lot Size',
                lot_size_select:'Please Select LotSize',
                    latitude:'Latitude',
                    longitude:'Longitude',
                    submit:'Submit',
                },
                faq: {
                    title: 'Faq',
                },

                documents: {
                    title: 'Documents',
                    download:'Download',
                },
                news:{
                    title: 'News',
                },
                site_safety: {
                    title: 'Site Safety',
                },
                in_risk: {
                    title: 'In Risk',
                },
                statistics:{
                    title: 'Statistics',
                },
                columbia_form:{
                    title: 'Colombia Form',

                    full_name:'Full Name',
                    address:'Address',
                    lot_number:'Lot Number',
                    chip_code:'Chip Code',
                    contact_number:'Contact Number',
                    latitude:'Latitude',
                    longitude:'Longitude',
                    submit:'Submit',

                    picker_placeholder:'Please Select Option',
                    error_msg:'Sorry Your House Cannot be Retrofitted',
                    homeowner_id:'HomeOwner Id',
                    chip_code:'Chip Code',
                    map_hazard:'Map Hazard',
                    map_Hazard_o_1:'yes',
                    map_Hazard_o_2:'no',
                    retaining_wall:'Are there site retaining walls',
                    retaining_wall_o_1:'yes',
                    retaining_wall_o_2:'no',
                    side_retaing_wall_height:'Side Retaining Wall Height',
                    srw_distance:'Distance From House ( Side Retaing Wall)',
                    frw:'Are there Found Retaining Walls?',
                    frw_option_1:'yes',
                    frw_option_2:'no',
                    frw_distance:'Distance From House ( Found Retaing Wall)',
                    storeys:'Storeys',
                    storeys_o_1:'One',
                    storeys_o_2:'Two',
                    storeys_o_3:'More than two',
                    principle_masonry:'Is Principle Masonry',
                    principle_masonry_o_1:'yes',
                    principle_masonry_o_2:'no',
                    frw_height:'Found Retaining Wall Height',
                    construction_detail:'Construction Detail',
                    residential:'Is the type of residential?',
                    residential_o_1:'yes',
                    residential_o_2:'no',
                    evidence:'Evidence of Damage',
                    evidence_o_1:'yes',
                    evidence_o_2:'no',
                    roof_type:'Roof Type',
                    roof_type_o_1:'Heavy',
                    roof_type_o_2:'Light',
                    roof_slab_type:'Roof Slab Type',
                    roof_slab_type_o_1:'Type 1',
                    roof_slab_type_o_2:'Type 2',
                    roof_slab_type_o_3:'Type 3',
                    roof_slab_type_o_4:'Others',
                    cantiliver:'Is there Cantilever',
                    cantiliver_o_1:'yes',
                    cantiliver_o_2:'no',
                    building_shape:'Building Shape',
                    buildingShape_o_1:'Simple',
                    buildingShape_o_2:'Complex',
                    building_shape_select:'Please select Options',
                    magic_plan:'Proceed to Magic Plan App'
                },
                login_form:
                {
                  username: 'Username',
                  password: 'Password',
                  username_error:'Enter correct username between 5 to 50 characters',
                  password_error:'Enter correct password between 4 to 20 characters',
                  login:'Login',
                },
                setting:{
                  title:'Setting',
                  about_us:'About Us',
                  contact_us:'Contact Us',
                  privacy_terms:'Privacy and Terms'
                
                },
                about_us:{
                title:'About Us',
                  about_text:'BuildChange.org built the Construction app as a Free app.This SERVICE is provided by BuildChange.org at no cost and is intened for use as is',
                  call_us:'Call Us',
                  mail_us:'Mail Us',
                },
                contact_us:{
                    title:'Contact Us',
                  help_text1:'How we can help you?',
                  help_text2:'Have a question,comment,suggestion, or just want to get in touch? We would love to hear from you.Fill out the form below and someone will get back to you as soon as possible',
                  full_name:'Full Name',
                  email_address:'Email Address',
                  phone:'Mobile Number',
                  write_message:'Write Message',
                  send:'Send',
                },
                common: {
                    details: 'Details',
                    loading: 'Loading...',
                    error: 'An error occurred, please try again later',
                    save: 'Save',
                    validation: 'Please check your parameters...',
                },
            },
            malay: {
                sidebar: {
                    home: 'rumah',
                    construction_library: 'Perpustakaan Pembinaan',
                    documents: 'Dokumen',
                    site_safety: 'Keselamatan Laman',
                    news: 'Berita',
                    in_risk: 'Dalam Risiko',
                    statistics: 'Statistik',
                    faq: 'Soalan yang kerap ditanya',
                    columbia_form: 'Tinjauan pemilik rumah',
                    help: 'Bantuan',

                    log_in:'Log masuk',

                },
                home: {
                    home: 'rumah',
                    construction_library: 'Perpustakaan Pembinaan',
                    documents: 'Dokumen',
                    site_safety: 'Keselamatan Laman',
                    news: 'Berita',
                    in_risk: 'Dalam Risiko',
                    statistics: 'Statistik',
                    faq: 'Soalan yang kerap ditanya',
                    columbia_form: 'Tinjauan pemilik rumah',
                    help: 'Bantuan',


                    list:'senarai',
                    grid:'Grid',


                    total_statistics:'Jumlah Perangkaan',


                    total_request:'Jumlah permintaan',
                    total_design:'Reka Bentuk Keseluruhan',
                    sucess_stories:'Kisah Kejayaan',
                    app_download:'Muat turun Apl'
                },
                construction_library:{
                    title: 'Perpustakaan Pembinaan',
                    technology:'Teknologi',
                    technology_select:'Sila Pilih Teknologi',
                    confined_masonry:'Masonry terkurung',
                    timber:'Kayu',
                    no_of_floor:'Bilangan Tingkat',
                    floor_select:'Sila Pilih Lantai',
                    one_floor:'1 Lantai',
                    two_floor:'2 Lantai',
                    type_of_house:'Jenis Rumah',
                    house_select:'Sila Pilih Rumah',
                    type_36:'Jenis 36',
                    type_45:'Jenis 45',
                    type_54:'Jenis 54',
                    type_of_bedroom:'Jenis Bilik Tidur',
                    bedroom_select:'Sila pilih Bilik Tidur',
                    one_bedroom:'1 bilik tidur',
                    two_bedroom:'2 bilik tidur',
                    three_bedroom:'3 bilik tidur',
                    four_bedroom:'4 bilik tidur',
                    toilet_access:'Akses tandas',
                    inside:'Dalam',
                    outside:'Di luar',
                    terrace_location:'Teres Lokasi',
                    front_terrace:'Teres Depan',
                    back_terrace:'Teres Balik',
                    side_terrace:'Teres sebelah',
                    lot_size:'Saiz lot',
                    lot_size_select:'Sila Pilih Saiz Lot',
                    latitude:'Latitud',
                    longitude:'Longitud',
                    submit:'Hantar'
                },
                faq: {
                    title: 'Soalan yang kerap ditanya',
                },
                documents: {
                    title: 'Dokumen',
                    download:'Muat turun'
                },
                news:{
                    title: 'Berita',
                },
                site_safety: {
                    title: 'Keselamatan Laman',
                },
                in_risk: {
                    title: 'Dalam Risiko',
                },
                statistics:{
                    title: 'Statistik',
                },
                columbia_form:{
                    title: 'Tinjauan pemilik rumah',

                    full_name:'Nama penuh',
                    address:'Alamat',
                    lot_number:'Nombor lot',
                    chip_code:'Kod Cip',
                    contact_number:'Nombor telefon',
                    latitude:'Latitud',
                    longitude:'Longitud',
                    submit:'Hantar',
                    
                    
                    picker_placeholder:'Sila Pilih Pilihan',
                    error_msg:'Maaf Rumah Anda Tidak Boleh Diperbaiki',
                    homeowner_id:'Id HomeOwner',
                    chip_code:'Kod Cip',
                    map_hazard:'Peta Bahaya',
                    map_Hazard_o_1:'ya',
                    map_Hazard_o_2:'tidak',
                    retaining_wall:'Adakah terdapat dinding penahan tapak?',
                    retaining_wall_o_1:'ya',
                    retaining_wall_o_2:'tidak',
                    side_retaing_wall_height:'Ketinggian Dinding Penahan Sebelah',
                    srw_distance:'Jarak Dari Rumah (Tembok Retaing Sisi)',
                    frw:'Adakah terdapat Tembok Penahan Terdapat',
                    frw_option_1:'ya',
                    frw_option_2:'tidak',
                    frw_distance:'Jarak Dari Rumah (Dinding Reta Ditemukan)',
                    storeys:'Kedai',
                    storeys_o_1:'Satu',
                    storeys_o_2:'Dua',
                    storeys_o_3:'Lebih daripada dua',
                    principle_masonry:'Adalah Principle Masonry',
                    principle_masonry_o_1:'ya',
                    principle_masonry_o_2:'tidak',
                    frw_height:'Menemui Ketinggian Dinding Penahan',
                    construction_detail:'Detail Pembinaan',
                    residential:'Adakah jenis kediaman',
                    residential_o_1:'ya',
                    residential_o_2:'tidak',
                    evidence:'Bukti Kerosakan',
                    evidence_o_1:'ya',
                    evidence_o_2:'tidak',
                    roof_type:'Jenis bumbung',
                    roof_type_o_1:'Berat',
                    roof_type_o_2:'Cahaya',
                    

                    roof_slab_type:'Jenis bumbung bumbung',
                    roof_slab_type_o_1:'Jenis 1',
                    roof_slab_type_o_2:'Jenis 2',
                    roof_slab_type_o_3:'Taip 3',
                    roof_slab_type_o_4:'Lain-lain',
                    cantiliver:'Adakah ada cantilever',
                    cantiliver_o_1:'ya',
                    cantiliver_o_2:'tidak',
                    building_shape:'Bentuk Bangunan',
                    

                    buildingShape_o_1:'Mudah',
                    buildingShape_o_2:'Kompleks',
                    building_shape_select:'Sila pilih Pilihan',
                    magic_plan:'Teruskan ke App Rencana Magic'
                },
                login_form:
                {
                username: 'Nama pengguna',
                password: 'Kata laluan',
                username_error:'Masukkan nama pengguna yang betul antara 5 hingga 50 aksara',
                password_error:'Masukkan kata laluan yang betul antara 4 hingga 20 aksara',
                login:'Log masuk',
                },
                setting:{
                title:'Menetapkan',
                about_us:'Tentang kita',
                contact_us:'Hubungi Kami',
                privacy_terms:'Privasi dan Syarat'

                },
                about_us:{
                    title:'Tentang kita',
                about_text:'BuildChange.org membina aplikasi Pembinaan sebagai aplikasi Percuma. PERKHIDMATAN ini disediakan oleh BuildChange.org tanpa sebarang kos dan digunakan untuk kegunaan seperti',
                call_us:'Hubungi Kami',
                mail_us:'Mel Kami',
                },
                contact_us:{
                    title:'Hubungi Kami',
                help_text1:'Bagaimana kami dapat membantu anda?',
                help_text2:'Ada soalan, komen, cadangan, atau hanya mahu menghubungi? Kami ingin mencuba dari anda. Isikan borang di bawah dan seseorang akan kembali kepada anda secepat mungkin',
                full_name:'Nama penuh',
                email_address:'Alamat emel',
                phone:'Nombor telefon',
                write_message:'Tulis Mesej',
                send:'Hantar',
                },
                common: {
                    details: 'Details',
                    loading: 'Loading...',
                    error: 'An error occurred, please try again later',
                    save: 'Save',
                    validation: 'Please check your parameters...',
                },
            },

            fil: {
                sidebar: {
                    home: 'Bahay',
                    construction_library: 'Library ng Konstruksyon',
                    documents: 'Mga Dokumento',
                    site_safety: 'kaligtasan ng site',
                    in_risk: 'sa panganib',
                    news: 'Balita',
                    statistics: 'istatistika',
                    faq: 'madalas na tanungin tanong',
                    columbia_form: 'Columbia Form',
                    help: 'Tulong',

                    log_in:'Mag log in',

                },
                home: {
                    title: 'Bahay',
                    construction_library: 'Library ng Konstruksyon',
                    documents: 'Mga Dokumento',
                    site_safety: 'kaligtasan ng site',
                    in_risk: 'sa panganib',
                    news: 'Balita',
                    statistics: 'istatistika',
                    faq: 'madalas na tanungin tanong',
                    columbia_form: 'Columbia Form',

                    list:'Listahan',
                    grid:'Grid',


                    total_statistics:'Kabuuang Istatistika',

                    total_request:'Kabuuang Kahilingan',
                    total_design:'Kabuuang Disenyo',
                    sucess_stories:'Mga Kuwento ng Tagumpay',
                    app_download:'Mga Pag-download ng App'
                },
                construction_library:{
                    title: 'Library ng Konstruksyon',
                    technology:'Teknolohiya',
                    technology_select:'Mangyaring Piliin Teknolohiya',
                    confined_masonry:'Nakakulong Pagmamason',
                    timber:'Timber',
                    no_of_floor:'Bilang ng Floor',
                    floor_select:'Mangyaring Piliin ang Floor',
                    one_floor:'1 Palapag',
                    two_floor:'2 Palapag',
                    type_of_house:'Uri ng Bahay',
                    house_select:'Mangyaring Piliin ang Bahay',
                    type_36:'Uri 36',
                    type_45:'Uri 45',
                    type_54:'Uri 54',
                    type_of_bedroom:'Uri ng Bedroom',
                    bedroom_select:'Mangyaring pumili ng Bedroom',
                    one_bedroom:'1 silid-tulugan',
                    two_bedroom:'2 silid-tulugan',
                    three_bedroom:'3 silid-tulugan',
                    four_bedroom:'4 silid-tulugan',
                    toilet_access:'Access sa Toilet',
                    inside:'Sa loob',
                    outside:'Sa labas',
                    terrace_location:'Terrace Lokasyon',
                    front_terrace:'Front Terrace',
                    back_terrace:'Bumalik Terrace',
                    side_terrace:'Side Terrace',
                    lot_size:'Laki ng Lote',
                    lot_size_select:'Mangyaring Piliin ang Laki ng Lote',
                    latitude:'Latitude',
                    longitude:'Longitude',
                    submit:'Ipasa'
                },
                faq: {
                    title: 'madalas na tanungin tanonga',
                },
                documents: {
                    title: 'Mga Dokumento',
                    download:'I-download',
                },
                                news: {
                    title: 'Balita',
                },
                site_safety: {
                    title: 'kaligtasan ng site',
                },
                in_risk: {
                    title: 'sa panganib',
                },
                statistics:{
                    title: 'istatistika',
                },
                columbia_form:{
                    title: 'Tinjauan pemilik rumah',
                    full_name:'Buong pangalan',
                    address:'Address',
                    lot_number:'Numero ng Lot',
                    chip_code:'Code ng Chip',
                    contact_number:'Numero ng Contact',
                    latitude:'Latitude',
                    longitude:'Longitude',
                    submit:'Ipasa',

                    picker_placeholder:'Mangyaring Piliin ang Pagpipilian',
                    error_msg:'Paumanhin Ang Iyong Bahay ay hindi maaaring ma-retrofitted',
                    homeowner_id:'HomeOwner Id',
                    chip_code:'Code ng Chip',
                    map_hazard:'Mapanganib na Mapa',
                    map_Hazard_o_1:'oo',
                    map_Hazard_o_2:'hindi',
                    retaining_wall:'Mayroon bang mga site retaining wall',
                    retaining_wall_o_1:'oo',
                    retaining_wall_o_2:'hindi',
                    side_retaing_wall_height:'Side Retaining Wall Height',
                    srw_distance:'Distance From House (Side Retaing Wall)',
                    frw:'May Natagpuang mga Retaining Wall',
                    frw_option_1:'oo',
                    frw_option_2:'hindi',
                    frw_distance:'Distance From House (Found Retaing Wall)',
                    storeys:'Mga Tindahan',
                    storeys_o_1:'Isa',
                    storeys_o_2:'Dalawa',
                    storeys_o_3:'Higit sa dalawa',
                    principle_masonry:'Ang Prinsipyo Pagmamason',
                    principle_masonry_o_1:'oo',
                    principle_masonry_o_2:'hindi',
                    frw_height:'Natagpuan Retaining Wall Taas',
                    construction_detail:'Detalye ng Konstruksyon',
                    residential:'Ang uri ba ng tirahan',
                    residential_o_1:'oo',
                    residential_o_2:'hindi',
                    evidence:'Katibayan ng Pinsala',
                    evidence_o_1:'oo',
                    evidence_o_2:'hindi',
                    roof_type:'Uri ng Bubong',

                    roof_type_o_1:'Malakas',
                    roof_type_o_2:'Banayad',
                    

                    roof_slab_type:'Uri ng Bubong na Slab',
                    roof_slab_type_o_1:'Uri ng 1',
                    roof_slab_type_o_2:'I-type ang 2',
                    roof_slab_type_o_3:'Uri ng 3',
                    roof_slab_type_o_4:'Iba pa',
                    cantiliver:'Mayroon bang cantilever',
                    cantiliver_o_1:'oo',
                    cantiliver_o_2:'hindi',
                    building_shape:'Building Shape',
                    buildingShape_o_1:'Simple',
                    buildingShape_o_2:'Complex',
                    building_shape_select:'Pakipili ang Opsyon',
                    magic_plan:'Magpatuloy sa Magic Plan App'
                },
                login_form:
                {
                username: 'Username',
                password: 'Password',
                username_error:'Ipasok ang tamang username sa pagitan ng 5 hanggang 50 character',
                password_error:'Ipasok ang tamang password sa pagitan ng 4 hanggang 20 na mga character',
                login:'Mag log in',
                },
                setting:{
                title:'Pagtatakda',
                about_us:'Tungkol sa atin',
                contact_us:'Makipag-ugnayan sa amin',
                privacy_terms:'Privacy at Mga Tuntunin'

                },
                about_us:{
                    title:'Tungkol sa atin',
                about_text:'Ang BuildChange.org ay nagtayo ng Construction app bilang isang libreng app. Ang SERBISYO na ito ay ibinibigay ng BuildChange.org nang walang bayad at ito ay binigyang-diin para sa paggamit bilang ay',
                call_us:'Tumawag sa Amin',
                mail_us:'Mail sa Amin',
                },
                contact_us:{
                    title:'Makipag-ugnayan sa amin',
                help_text1:'Paano namin matutulungan ka?',
                help_text2:'Magkaroon ng isang katanungan, puna, mungkahi, o gusto lang makipag-ugnay? Gustung-gusto naming magsaya mula sa iyo. Punan ang form sa ibaba at ang isang tao ay babalik sa iyo sa lalong madaling panahon',
                full_name:'Buong pangalan',
                email_address:'Email Address',
                phone:'  Numero ng Mobile',
                write_message:'Magsulat ng mensahe',
                send:'Ipadala',
                },
                common: {
                    details: 'Détails',
                    loading: 'Chargement...',
                    error: 'Une erreur est survenue, veuillez réessayer plus tard',
                    save: 'Sauvegarder',
                    validation: 'Merci de vérifier vos paramètres...',
                },
            },
            es: {
                sidebar: {
                    home: 'Casa',
                    construction_library: 'Biblioteca de construcción',
                    documents: 'Documentos',
                    site_safety: 'seguridad del sitio',
                    in_risk: 'en riesgo',
                    news: 'Noticias',
                    statistics: 'estadística',
                    faq: 'preguntas frecuentes',
                    columbia_form: 'Columbia formar',
                    help: 'Ayuda',

                    log_in:'Iniciar sesión',
                    







                },
                home: {
                    title: 'Casa',
                    construction_library: 'Biblioteca de construcción',
                    documents: 'Documentos',
                    site_safety: 'seguridad del sitio',
                    in_risk: 'en riesgo',
                    news: 'Noticias',
                    statistics: 'estadística',
                    faq: 'preguntas frecuentes',
                    columbia_form: 'Columbia formar',
                    help: 'Ayuda',


                    list:'Lista',
                    grid:'Cuadrícula',

                    total_statistics:'Estadísticas totales',

                    total_request:'Solicitud total',
                    total_design:'Diseño total',
                    sucess_stories:'Historias de éxito',
                    app_download:'Descargas de aplicaciones'
                },
                construction_library:{
                    title: 'Biblioteca de construcción',
                    technology:'Tecnología',
                    technology_select:'Seleccione Tecnología',
                    confined_masonry:'Masoneria confinada',
                    timber:'Madera',
                    no_of_floor:'Numero de piso',
                    floor_select:'Por favor seleccione Piso',
                    one_floor:'1 piso',
                    two_floor:'2 pisos',
                    type_of_house:'Tipo de casa',
                    house_select:'Por favor seleccione casa',
                    type_36:'Tipo 36',
                    type_45:'Tipo 45',
                    type_54:'Tipo 54',
                    type_of_bedroom:'Tipo de dormitorio',
                    bedroom_select:'Por favor seleccione Dormitorio',
                    one_bedroom:'1 dormitorio',
                    two_bedroom:'2 dormitorios',
                    three_bedroom:'3 dormitorios',
                    four_bedroom:'4 dormitorios',
                    toilet_access:'Acceso al baño',
                    inside:'Dentro',
                    outside:'Fuera de',
                    terrace_location:'Ubicación de la terraza',
                    front_terrace:'Terraza delantera',
                    back_terrace:'Terraza trasera',
                    side_terrace:'Terraza lateral',
                    lot_size:'Tamaño del lote',
                    lot_size_select:'Por favor seleccione el tamaño del lote',

                    latitude:'Latitud',
                    longitude:'Longitud',
                    submit:'Enviar'
                },
                faq: {
                    title: 'preguntas frecuentes',
                },
                documents: {
                    title: 'Documentos',
                    download:'Descargar'
                },
                news: {
                    title: 'Noticias',
                },
                site_safety: {
                    title: 'seguridad del sitio',
                },
                in_risk: {
                    title: 'en riesgo',
                },
                statistics:{
                    title: 'estadística',
                },
                columbia_form:{
                    title: 'Columbia formar',
                    full_name:'Nombre completo',
                    address:'Dirección',
                    lot_number:'Numero de lote',
                    chip_code:'Código de chip',
                    contact_number:'Número de contacto',
                    latitude:'Latitud',
                    longitude:'Longitud',
                    submit:'Enviar',

                    picker_placeholder:'Seleccione la opción',

                    error_msg:'Lo siento tu casa no puede ser reequipada',
                    homeowner_id:'Id de casa',
                    chip_code:'Código de chip',
                    map_hazard:'Mapa de peligro',
                    map_Hazard_o_1:'sí',
                    map_Hazard_o_2:'no',
                    retaining_wall:'¿Hay muros de contención del sitio?',
                    retaining_wall_o_1:'sí',
                    retaining_wall_o_2:'no',
                    side_retaing_wall_height:'Altura del muro de contención lateral',
                    srw_distance:'Distancia de la casa (pared lateral de Retaing)',
                    frw:'¿Se encuentran muros de contención',
                    frw_option_1:'sí',
                    frw_option_2:'no',
                    frw_distance:'Distancia de la casa (Muro de Retaing encontrado)',
                    storeys:'Pisos',
                    storeys_o_1:'Uno',
                    storeys_o_2:'Dos',
                    storeys_o_3:'Más de dos',
                    principle_masonry:'Es principio de albañilería',
                    principle_masonry_o_1:'sí',
                    principle_masonry_o_2:'no',
                    frw_height:'Altura de muro de contención encontrada',
                    construction_detail:'Detalle de construcción',
                    residential:'Es el tipo de residencial.',
                    residential_o_1:'sí',
                    residential_o_2:'no',
                    evidence:'Evidencia de Daño',
                    evidence_o_1:'sí',
                    evidence_o_2:'no',
                    roof_type:'Tipo de techo',
                    roof_type_o_1:'Pesado',
                    roof_type_o_2:'Ligero',
                    roof_slab_type:'Tipo de losa de techo',
                    roof_slab_type_o_1:'Tipo 1',
                    roof_slab_type_o_2:'Tipo 2',
                    roof_slab_type_o_3:'Tipo 3',
                    roof_slab_type_o_4:'Otros',
                    cantiliver:'Hay voladizo',
                    cantiliver_o_1:'sí',
                    cantiliver_o_2:'no',
                    building_shape:'Forma del edificio',
                    

                    buildingShape_o_1:'Sencillo',
                    buildingShape_o_2:'Complejo',
                    building_shape_select:'Por favor seleccione Opciones',
                    magic_plan:'Continuar con la aplicación Magic Plan'
                },
                login_form:
                    {
                    username: 'Nombre de usuario',
                    password: 'Contraseña',
                    username_error:'Introduzca el nombre de usuario correcto entre 5 a 50 caracteres',
                    password_error:'Introduzca la contraseña correcta entre 4 a 20 caracteres',
                    login:'Iniciar sesión',
                    },
                    setting:{
                    title:'Ajuste',
                    about_us:'Sobre nosotros',
                    contact_us:'Contáctenos',
                    privacy_terms:'Privacidad y Términos'

                    },
                    about_us:{
                        title: 'Sobre nosotros',
                    about_text:'BuildChange.org creó la aplicación de construcción como una aplicación gratuita. BuildChange.org proporciona este SERVICIO sin costo y está diseñado para ser utilizado',
                    call_us:'Llamanos',
                    mail_us:'Envíenos un correo',
                    },
                    contact_us:{
                        title: 'Contáctenos',
                    help_text1:'¿Cómo te podemos ayudar?',
                    help_text2:'¿Tiene alguna pregunta, comentario, sugerencia o simplemente quiere ponerse en contacto? Nos encantaría tener noticias suyas. Llene el siguiente formulario y alguien se comunicará con usted lo antes posible.',
                    full_name:'Nombre completo',
                    email_address:'Dirección de correo electrónico',
                    phone:'Número de teléfono móvil',
                    write_message:'Escribe un mensaje',
                    send:'Enviar',
                    },
                common: {
                    details: 'التفاصيل',
                    loading: 'جاري التحميل',
                    error: 'حدث خطأ ، يرجى المحاولة مرة أخرى في وقت لاحق',
                    save: 'حفظ',
                    validation: 'يرجى التحقق من المعلمات ...',
                },
            }
        },

        // have a common namespace used around the full app
        ns: ['common'],
        defaultNS: 'common',

        debug: false,

        cache: {
            enabled: true
        },

        interpolation: {
            escapeValue: false, // not needed for react as it does escape per default to prevent xss!
        }
    });


export default i18n;