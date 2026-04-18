// seed.js — run with: node seed.js
// Seeds the 'classlist' collection in Firestore with all 75 P Batch students.
// Run ONCE from your machine. Install deps first: npm install firebase-admin

const admin = require("firebase-admin");
const serviceAccount = require("./serviceAccountKey.json"); // download from Firebase Console

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const db = admin.firestore();

const students = [
  { rollNo: "2022103031", name: "SIVANIPRIYA P S",       email: "sivanipriyasenthilkumar@gmail.com", phone: "9585070249" },
  { rollNo: "2022103032", name: "PAVITHRA B",             email: "pavithracsb175@gmail.com",           phone: "9042922100" },
  { rollNo: "2022103033", name: "IRFAN FAREETH S",        email: "irfanfareeths@gmail.com",            phone: "9842462289" },
  { rollNo: "2022103034", name: "DHARANI SENGOTTUVELU",   email: "dharudharu2004@gmail.com",           phone: "8668044172" },
  { rollNo: "2022103035", name: "NIKAASH T K",            email: "nikaasharulkon@gmail.com",           phone: "8438974361" },
  { rollNo: "2022103036", name: "ARIKARAN C",             email: "arikaran0208@gmail.com",             phone: "9025115600" },
  { rollNo: "2022103037", name: "AISHWARYA S",            email: "aishwaryasenthurpandian@gmail.com",  phone: "9790526661" },
  { rollNo: "2022103038", name: "KEERTHANAA Y",           email: "keerthanaayuvaraj05072004@gmail.com",phone: "7305909261" },
  { rollNo: "2022103039", name: "VASUNDARAA E",           email: "vasundra2@gmail.com",                phone: "9047071151" },
  { rollNo: "2022103041", name: "THEYJESHWARAN T",        email: "theyjesh2707@gmail.com",             phone: "7708719364" },
  { rollNo: "2022103042", name: "KIRUTHIGA P M",          email: "pmkiruthiga17@gmail.com",            phone: "8870413188" },
  { rollNo: "2022103043", name: "YUVARAJ A K S",          email: "sureshkrishna737@yahoo.com",         phone: "9994352391" },
  { rollNo: "2022103044", name: "SOWMIYA SUNDARAM G",     email: "sowmiyasundaram247@gmail.com",       phone: "6369107754" },
  { rollNo: "2022103046", name: "HARI PRASATH V S",       email: "harihacksofficial@gmail.com",        phone: "8072727935" },
  { rollNo: "2022103047", name: "ROHITH B",               email: "rohith1asbr@gmail.com",              phone: "8148128406" },
  { rollNo: "2022103049", name: "JOTHI SRI S",            email: "jothisri200518@gmail.com",           phone: "6381582319" },
  { rollNo: "2022103050", name: "RAM PRASATH K V",        email: "ramreigns1234@gmail.com",            phone: "7695866009" },
  { rollNo: "2022103051", name: "KARTHICK RAJA R",        email: "karthickraja3146@gmail.com",         phone: "9080729165" },
  { rollNo: "2022103052", name: "LOKESH KANNAN M",        email: "lokeshmurali2004@gmail.com",         phone: "7358010926" },
  { rollNo: "2022103054", name: "SHREYA KARTHIKEYAN",     email: "shreya.karthikeyan04@gmail.com",     phone: "9840336394" },
  { rollNo: "2022103055", name: "HARINI NATARAJAN",       email: "harinirajan192004@gmail.com",        phone: "8838061191" },
  { rollNo: "2022103057", name: "TARUN KUMAR ELANGOVAN",  email: "tarun12june@hotmail.com",            phone: "9445744690" },
  { rollNo: "2022103058", name: "PRIYANKA AKILAN",        email: "priyankaakilan@gmail.com",           phone: "7305981218" },
  { rollNo: "2022103059", name: "NANDITH RAJESH",         email: "nandithrajesh@gmail.com",            phone: "7305989697" },
  { rollNo: "2022103060", name: "AKSHARA ACHUTHAN",       email: "akshara38689@gmail.com",             phone: "8148197390" },
  { rollNo: "2022103305", name: "ANAND KARTHIKEYAN S",    email: "anand5ksenthil@gmail.com",           phone: "6383240897" },
  { rollNo: "2022103306", name: "ASHWIN ARUL M",          email: "ashwinarul2104@gmail.com",           phone: "9342899751" },
  { rollNo: "2022103307", name: "KALAIVANAN U",           email: "herekalaivanan@gmail.com",           phone: "9150162264" },
  { rollNo: "2022103308", name: "SATHISH T",              email: "sathishram14327633@gmail.com",       phone: "9944270945" },
  { rollNo: "2022103541", name: "ABINAYA SOWMYA A R",     email: "abisowmya786@gmail.com",             phone: "9489805423" },
  { rollNo: "2022103542", name: "SUBHASRI M",             email: "subhasrimuthusamy2004@gmail.com",    phone: "7418908589" },
  { rollNo: "2022103543", name: "KRISNA V J",             email: "vjkrisna995@gmail.com",              phone: "9566798102" },
  { rollNo: "2022103544", name: "BALAMURUGAN S",          email: "balamurugan16sa@gmail.com",          phone: "9150109948" },
  { rollNo: "2022103545", name: "SHAKITH A",              email: "skshakith@gmail.com",                phone: "9597983345" },
  { rollNo: "2022103546", name: "HARINI S",               email: "harinies17@gmail.com",               phone: "9677969294" },
  { rollNo: "2022103547", name: "YUKTANIDHI C",           email: "yuktanidhi15@gmail.com",             phone: "9136026297" },
  { rollNo: "2022103548", name: "PRASITHA M",             email: "prasitha006@gmail.com",              phone: "9443449959" },
  { rollNo: "2022103549", name: "SARVESHWARAN S",         email: "sarveshwarans1011@gmail.com",        phone: "9123551408" },
  { rollNo: "2022103550", name: "NANDA KUMARAN K R",      email: "nandakumaran5566@gmail.com",         phone: "7094035755" },
  { rollNo: "2022103551", name: "SUBASH L",               email: "subashlakshmanan27@gmail.com",       phone: "6385919870" },
  { rollNo: "2022103552", name: "KEERTHIKA B",            email: "keerthika.baktha@gmail.com",         phone: "8148457108" },
  { rollNo: "2022103553", name: "NALINIKSHA P",           email: "naliniksha24@gmail.com",             phone: "9080668298" },
  { rollNo: "2022103554", name: "HARISANGAR A P",         email: "apharisangar4@gmail.com",            phone: "9952878399" },
  { rollNo: "2022103555", name: "ELUMALAI D",             email: "elumalai095@gmail.com",              phone: "9361536164" },
  { rollNo: "2022103556", name: "GANESH KANNA M",         email: "ganeshmusic4242@gmail.com",          phone: "9894146703" },
  { rollNo: "2022103557", name: "SUSHMITHA P",            email: "sushmithathangamani04@gmail.com",    phone: "8668051876" },
  { rollNo: "2022103558", name: "SANTHOSH P",             email: "santhoshp12a313@gmail.com",          phone: "7449098415" },
  { rollNo: "2022103559", name: "ROSHINI T E",            email: "roshinite2004@gmail.com",            phone: "9043588631" },
  { rollNo: "2022103560", name: "SURENDIRAN M",           email: "surendiran.m2004@gmail.com",         phone: "8838842536" },
  { rollNo: "2022103561", name: "PUNITHA K",              email: "mdkumarasamy1977@gmail.com",         phone: "7418220605" },
  { rollNo: "2022103562", name: "KABILAN N",              email: "kabilannarayananp@gmail.com",        phone: "9944750357" },
  { rollNo: "2022103563", name: "SAKTHIPRIYAN V",         email: "sakthipriyan417@gmail.com",          phone: "6385241136" },
  { rollNo: "2022103564", name: "VAIRAPERUMAL S",         email: "vairaperumalvp@gmail.com",           phone: "9629558878" },
  { rollNo: "2022103565", name: "SHIVARANJANI M",         email: "shivani13murali@gmail.com",          phone: "9363167941" },
  { rollNo: "2022103566", name: "RAGUL R",                email: "ragulrajaselvi2004@gmail.com",       phone: "8637488615" },
  { rollNo: "2022103567", name: "CHRISTY SHAWN FRANCO",   email: "shawnfranco.christy@gmail.com",      phone: "7904351514" },
  { rollNo: "2022103568", name: "SUBHA GEETHA S K",       email: "subhageethask@gmail.com",            phone: "7358709242" },
  { rollNo: "2022103569", name: "SWASTIKA S R",           email: "swastika2414@gmail.com",             phone: "6374693899" },
  { rollNo: "2022103570", name: "SHUNMATHI R",            email: "shunmathi06124@gmail.com",           phone: "9444647179" },
  { rollNo: "2022103571", name: "MAYILMURUGAN R",         email: "mayilmuruganr@gmail.com",            phone: "9944420277" },
  { rollNo: "2022103572", name: "ARUMUGAMADITHYA",        email: "adithya2004b@gmail.com",             phone: "7893410746" },
  { rollNo: "2022103574", name: "SOWMIYA D",              email: "sowmiyadasa2004@gmail.com",          phone: "9342839567" },
  { rollNo: "2022103575", name: "YUVAPRIYA D",            email: "yuvapriya245@gmail.com",             phone: "9382150293" },
  { rollNo: "2022103576", name: "RASEENA THASNEEM A",     email: "ebkraseena2004@gmail.com",           phone: "9345482734" },
  { rollNo: "2022103577", name: "KARTHIKEYAN G",          email: "karthikeyang25092004@gmail.com",     phone: "9677455861" },
  { rollNo: "2022103579", name: "MOHAMED IMRAN R M N",    email: "mohamed2512imran@gmail.com",         phone: "8610433939" },
  { rollNo: "2022103580", name: "SULOCHANA H",            email: "sulochanahaldorai@gmail.com",        phone: "9025193250" },
  { rollNo: "2022103707", name: "GOKULRAJ",               email: "gokulraj10106@gmail.com",            phone: "9344702914" },
  { rollNo: "2022103708", name: "GOKULAKANNAN T",         email: "gokulakannan5289@gmail.com",         phone: "6382332554" },
  { rollNo: "2022103709", name: "FIDA HUSSAIN A",         email: "fidasi265@gmail.com",                phone: "9514245201" },
  { rollNo: "2022103710", name: "NALINA R",               email: "nalinarajendran14@gmail.com",        phone: "8524945282" },
  { rollNo: "2022103711", name: "BABU A",                 email: "babu2003ar@gmail.com",               phone: "9087389471" },
  { rollNo: "2022103712", name: "MAHESWARY MEENA K",      email: "maheswarymeenakct@gmail.com",        phone: "9786814340" },
  { rollNo: "2022103713", name: "KANISHKAR S",            email: "kanishkark127@gmail.com",            phone: "8838024203" },
  { rollNo: "2022103714", name: "VARUNKUMAR R",           email: "varunkumarceg@gmail.com",            phone: "8939300081" },
];

async function seed() {
  const batch = db.batch();
  for (const s of students) {
    // Use roll number as doc ID — unique, stable
    const ref = db.collection("classlist").doc(s.rollNo);
    batch.set(ref, {
      rollNo: s.rollNo,
      name: s.name,
      email: s.email.toLowerCase(),
      phone: s.phone,
      uid: null, // will be set when user first signs in
    });
  }
  await batch.commit();
  console.log(`✅ seeded ${students.length} students into classlist`);
  process.exit(0);
}

seed().catch((e) => { console.error(e); process.exit(1); });