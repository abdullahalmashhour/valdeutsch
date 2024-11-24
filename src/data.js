import componentsImg from './assets/components.png';
import propsImg from './assets/config.png';
import jsxImg from './assets/jsx-ui.png';
import stateImg from './assets/state-mgmt.png';

export const CORE_CONCEPTS = [
  {
    image: componentsImg,
    title: ' المطار',
    description:
      '',
  },
  {
    image: jsxImg,
    title: 'الأعداد والأحجام',
    description:
      '',
  },
  {
    image: propsImg,
    title: ' الفراغ والسفر ',
    description:
      '',
  },
  {
    image: stateImg,
    title: ' العمل والتعلم ',
    description:
      ' ',
  },
];

export const EXAMPLES = {
  airport: {
    title: 'في المطار',
    description:'            ',

   
    code: `
إليك مجموعة من الكلمات الألمانية المهمة التي قد تحتاجها في المطار
	1.	Flughafen - المطار
	2.	Abflug - الإقلاع
	3.	Ankunft - الوصول
	4.	Flugnummer - رقم الرحلة
	5.	Check-in-Schalter - مكتب تسجيل الدخول
	6.	Gepäck - الأمتعة
	7.	Handgepäck - الأمتعة اليدوية
	8.	Koffer - حقيبة السفر
	9.	Gepäckausgabe - استلام الأمتعة
	10.	Sicherheitskontrolle - نقطة التفتيش الأمني
	11.	Passkontrolle - مراقبة الجوازات
	12.	Boardingkarte - بطاقة الصعود إلى الطائرة
	13.	Abfluggate - بوابة الإقلاع
	14.	Verspätung - تأخير
	15.	Flugzeug - الطائرة
	16.	Anschlussflug - الرحلة المتصلة
	17.	Ticketschalter - مكتب التذاكر
	18.	Notausgang - مخرج الطوارئ
	19.	Terminal - صالة الركاب
	20.	Zoll - الجمارك

يمكنك استخدام هذه الكلمات في مختلف المواقف داخل المطار.`,
  },
  intheway: {
    title: 'في الطريق',
    description:
      '',
    code: `
إليك مجموعة من الكلمات الألمانية التي قد تحتاجها أثناء التنقل أو في الطريق
	1.	Straße - شارع
	2.	Weg - طريق
	3.	Autobahn - طريق سريع
	4.	Ampel - إشارة المرور
	5.	Kreuzung - تقاطع
	6.	Fußgängerweg - ممر المشاة
	7.	Bushaltestelle - موقف الحافلة
	8.	Bahnhof - محطة القطار
	9.	Zug - قطار
	10.	Fahrradweg - طريق الدراجات
	11.	Taxi - تاكسي
	12.	Parkplatz - موقف سيارات
	13.	Tankstelle - محطة الوقود
	14.	Karte - خريطة
	15.	Verkehr - حركة المرور
	16.	Richtung - اتجاه
	17.	Abbiegen - انعطاف
	18•	Links abbiegen - انعطف يسارًا
	19•	Rechts abbiegen - انعطف يمينًا
	20.	Geradeaus - إلى الأمام
	21.	Entfernung - مسافة
	22.	Geschwindigkeit - السرعة

يمكن استخدام هذه الكلمات للسؤال عن الاتجاهات، التنقل داخل المدن، أو أثناء القيادة.`,
  },
  numberandsize: {
    title: 'الأعداد والأحجام ',
    description:'',
    code: `
الأعداد باللغة الألمانية

إليك الأعداد الأساسية:
	1.	Null - صفر
	2.	Eins - واحد
	3.	Zwei - اثنان
	4.	Drei - ثلاثة
	5.	Vier - أربعة
	6.	Fünf - خمسة
	7.	Sechs - ستة
	8.	Sieben - سبعة
	9.	Acht - ثمانية
	10.	Neun - تسعة
	11.	Zehn - عشرة

أعداد أخرى مهمة:
	•	Elf - أحد عشر
	•	Zwölf - اثنا عشر
	•	Zwanzig - عشرون
	•	Hundert - مئة
	•	Tausend - ألف

الأحجام باللغة الألمانية

تحتاج الأحجام لوصف الأشياء، وإليك أهم الكلمات:
	1.	Klein - صغير
	2.	Groß - كبير
	3.	Kurz - قصير
	4.	Lang - طويل
	5.	Dünn - نحيف / رفيع
	6.	Dick - سميك / ممتلئ
	7.	Eng - ضيق
	8.	Weit - واسع
	9.	Schwer - ثقيل
	10.	Leicht - خفيف

استخدام هذه الكلمات سيساعدك في وصف الكميات والأحجام أو عند الشراء والسؤال عن مقاسات أو أحجام معينة.
}`,
  },
  emergency: {
    title: ' في حالات الطوارئ ',
    description:'',
    code: `

كلمات وعبارات طوارئ عامة

	1.	Notfall - حالة طوارئ
	2.	Hilfe! - النجدة!
	3.	Polizei - الشرطة
	4.	Krankenwagen - سيارة إسعاف
	5.	Feuerwehr - الإطفاء
	6.	Arzt - طبيب
	7.	Krankenhaus - مستشفى
	8.	Unfall - حادث
	9.	Verletzung - إصابة
	10.	Gefahr - خطر

طلب المساعدة

	1.	Können Sie mir helfen? - هل يمكنك مساعدتي؟
	2.	Ich brauche Hilfe. - أحتاج إلى مساعدة.
	3.	Rufen Sie die Polizei! - اتصل بالشرطة!
	4.	Rufen Sie einen Krankenwagen! - اتصل بسيارة الإسعاف!
	5.	Wo ist das nächste Krankenhaus? - أين أقرب مستشفى؟

في حالة فقدان شيء أو شخص

	1.	Ich habe meinen Pass verloren. - لقد فقدت جواز سفري.
	2.	Ich habe mein Handy verloren. - لقد فقدت هاتفي المحمول.
	3.	Ich kann meine Familie nicht finden. - لا أستطيع العثور على عائلتي.

الطوارئ الصحية

	1.	Ich fühle mich nicht gut. - لا أشعر أنني بخير.
	2.	Ich habe Schmerzen. - لدي ألم.
	3.	Ich brauche einen Arzt. - أحتاج إلى طبيب.
	4.	Ich bin verletzt. - أنا مصاب.
	5.	Ich habe eine Allergie. - لدي حساسية.

في حالة الحريق أو الخطر

	1.	Es brennt! - هناك حريق!
	2.	Wo ist der Notausgang? - أين مخرج الطوارئ؟
	3.	Vorsicht! - انتبه!

أرقام الطوارئ في ألمانيا

	1.	112 - رقم الطوارئ للحريق أو الإسعاف.
	2.	110 - رقم الطوارئ للشرطة.

استخدام هذه الكلمات والعبارات سيساعدك على التصرف بسرعة وفعالية في حالات الطوارئ.`,
  },
  inTheCity: {
    title: ' في المدينة',
    description:'            ',

   
    code: `إليك مجموعة من الكلمات الألمانية المهمة التي قد تحتاجها أثناء وجودك في المدينة:

أماكن في المدينة

	1.	Stadt - مدينة
	2.	Marktplatz - ساحة السوق
	3.	Rathaus - دار البلدية
	4.	Kirche - كنيسة
	5.	Park - حديقة
	6.	Bahnhof - محطة القطار
	7.	Bushaltestelle - موقف الحافلة
	8.	Polizeistation - مركز الشرطة
	9.	Krankenhaus - مستشفى
	10.	Apotheke - صيدلية
	11.	Supermarkt - سوبرماركت
	12.	Post - مكتب البريد
	13.	Bibliothek - مكتبة
	14.	Café - مقهى
	15.	Restaurant - مطعم
	16.	Hotel - فندق
	17.	Tankstelle - محطة الوقود

التنقل في المدينة

	1.	Straße - شارع
	2.	Weg - طريق
	3.	Kreuzung - تقاطع
	4.	Ampel - إشارة المرور
	5.	U-Bahn - مترو الأنفاق
	6.	Straßenbahn - الترام
	7.	Taxi - تاكسي
	8.	Fahrrad - دراجة
	9.	Fußgängerzone - منطقة المشاة
	10.	Parkplatz - موقف سيارات

أسئلة تحتاجها في المدينة

	1.	Wo ist…? - أين هو/هي…؟
	2.	Wie komme ich zum/zur…? - كيف أصل إلى…؟
	3.	Ist es weit? - هل هو بعيد؟
	4.	Wie viel kostet das? - كم يكلف ذلك؟
	5.	Haben Sie eine Stadtkarte? - هل لديك خريطة للمدينة؟

مصطلحات عامة مفيدة

	1.	Einkaufen - التسوق
	2.	Öffnungszeiten - ساعات العمل
	3.	Geldautomat - ماكينة صراف آلي
	4.	Toilette - مرحاض
	5.	Touristeninformation - مكتب المعلومات السياحية
	6.	Eintritt - رسوم الدخول
	7.	Schloss - قصر
	8.	Museum - متحف

استخدام هذه الكلمات والعبارات سيساعدك على التنقل بسهولة والتواصل في المدينة.`,
  },
  study: {
    title: ' في التعلم',
    description:'            ',

   
    code: `إليك مجموعة من الكلمات الألمانية المهمة التي قد تحتاجها أثناء التعلم والدراسة:

الكلمات المتعلقة بالمدرسة أو التعليم

	1.	Schule - مدرسة
	2.	Universität - جامعة
	3.	Klasse - فصل دراسي
	4.	Lehrer/Lehrerin - معلم / معلمة
	5.	Schüler/Schülerin - طالب / طالبة
	6.	Kurs - دورة تدريبية
	7.	Fach - مادة دراسية
	8.	Hausaufgaben - الواجبات المنزلية
	9.	Prüfung - امتحان
	10.	Noten - الدرجات
	11.	Zeugnis - شهادة
	12.	Buch - كتاب
	13.	Heft - دفتر
	14.	Stift - قلم
	15.	Tafel - السبورة

مصطلحات التعليم والتعلم

	1.	Lernen - التعلم
	2.	Studieren - الدراسة
	3.	Lesen - القراءة
	4.	Schreiben - الكتابة
	5.	Üben - التمرين / التدريب
	6.	Frage - سؤال
	7.	Antwort - إجابة
	8.	Wissen - المعرفة
	9.	Sprache - لغة
	10.	Wortschatz - مفردات
	11.	Grammatik - قواعد اللغة
	12.	Satz - جملة
	13.	Fehler - خطأ
	14.	Richtig - صحيح
	15.	Übersetzung - ترجمة

الكلمات المتعلقة بالأدوات المدرسية

	1.	Bleistift - قلم رصاص
	2.	Kugelschreiber - قلم حبر
	3.	Radiergummi - ممحاة
	4.	Lineal - مسطرة
	5.	Tasche - حقيبة
	6.	Computer - حاسوب
	7.	Laptop - كمبيوتر محمول
	8.	Taschenrechner - آلة حاسبة

أسئلة وعبارات للتعلم

	1.	Wie sagt man das auf Deutsch? - كيف تقول ذلك بالألمانية؟
	2.	Können Sie das wiederholen? - هل يمكنك تكرار ذلك؟
	3.	Was bedeutet das? - ماذا يعني ذلك؟
	4.	Ich habe eine Frage. - لدي سؤال.
	5.	Können Sie mir helfen? - هل يمكنك مساعدتي؟
	6.	Ich verstehe nicht. - لا أفهم.
	7.	Können Sie das erklären? - هل يمكنك شرح ذلك؟

هذه الكلمات والعبارات مفيدة جدًا إذا كنت تتعلم اللغة الألمانية أو أي موضوع آخر.
    `
,
  },
  work: {
    title: ' في العمل ',
    description:'            ',

   
    code: `إليك قائمة بالكلمات والعبارات المهمة التي قد تحتاجها أثناء العمل باللغة الألمانية:

أماكن وأدوار العمل

	1.	Arbeit - عمل
	2.	Arbeitsplatz - مكان العمل
	3.	Firma - شركة
	4.	Büro - مكتب
	5.	Kollege/Kollegin - زميل/زميلة
	6.	Chef/Chefin - مدير/مديرة
	7.	Mitarbeiter/Mitarbeiterin - موظف/موظفة
	8.	Abteilung - قسم
	9.	Team - فريق
	10.	Besprechung - اجتماع

مصطلحات عامة في العمل

	1.	Aufgabe - مهمة
	2.	Projekt - مشروع
	3.	Deadline - الموعد النهائي
	4.	Zeitplan - جدول زمني
	5.	Arbeitszeit - ساعات العمل
	6.	Vollzeit - دوام كامل
	7.	Teilzeit - دوام جزئي
	8.	Pause - استراحة
	9.	Überstunden - ساعات إضافية
	10.	Bericht - تقرير

معدات وأدوات العمل

	1.	Computer - حاسوب
	2.	Drucker - طابعة
	3.	Telefon - هاتف
	4.	E-Mail - بريد إلكتروني
	5.	Tastatur - لوحة مفاتيح
	6.	Bildschirm - شاشة
	7.	Akten - ملفات
	8.	Schreibtisch - مكتب (طاولة)
	9.	Stuhl - كرسي
	10.	Notizblock - دفتر ملاحظات

الحوار والتواصل في العمل

	1.	Können wir darüber sprechen? - هل يمكننا التحدث عن ذلك؟
	2.	Wann ist das fällig? - متى يجب تسليم هذا؟
	3.	Wie kann ich helfen? - كيف يمكنني المساعدة؟
	4.	Ich brauche Unterstützung. - أحتاج إلى دعم.
	5.	Gibt es noch etwas zu tun? - هل هناك شيء آخر يجب القيام به؟
	6.	Danke für Ihre Hilfe. - شكرًا لمساعدتك.
	7.	Ich stimme zu. - أنا موافق.
	8.	Ich habe eine Idee. - لدي فكرة.

مصطلحات التوظيف والرواتب

	1.	Stellenangebot - عرض عمل
	2.	Bewerbung - طلب وظيفة
	3.	Lebenslauf - السيرة الذاتية
	4.	Vertrag - عقد
	5.	Gehalt - راتب
	6.	Lohn - أجر
	7.	Urlaub - إجازة
	8.	Kündigung - استقالة/إقالة
	9.	Probezeit - فترة التجربة

مشاكل وحلول في العمل

	1.	Problem - مشكلة
	2.	Lösung - حل
	3.	Fehler - خطأ
	4.	Frist - مهلة
	5.	Stress - ضغط عمل

عبارات مفيدة في بيئة العمل

	1.	Ich verstehe. - أنا أفهم.
	2.	Können Sie das erklären? - هل يمكنك شرح ذلك؟
	3.	Ich bin fast fertig. - أنا على وشك الانتهاء.
	4.	Gibt es Neuigkeiten? - هل هناك أخبار جديدة؟
	5.	Das war ein guter Vorschlag. - كان هذا اقتراحًا جيدًا.

هذه الكلمات ستساعدك في التواصل والعمل بكفاءة داخل بيئة العمل الناطقة بالألمانية.
    `
,
  },
  resturant: {
    title: ' في المطعم ',
    description:'            ',

   
    code: `إليك مجموعة من الكلمات والعبارات المهمة التي قد تحتاجها في المطعم في ألمانيا:

مصطلحات أساسية في المطعم

	1.	Restaurant - مطعم
	2.	Speisekarte - قائمة الطعام
	3.	Getränkekarte - قائمة المشروبات
	4.	Tisch - طاولة
	5.	Stuhl - كرسي
	6.	Gedeck - إعداد الطاولة
	7.	Rechnung - فاتورة
	8.	Bedienung - خدمة
	9.	Reservierung - حجز
	10.	Kellner/Kellnerin - نادل/نادلة

عبارات عند الدخول إلى المطعم

	1.	Ein Tisch für [Zwei, Drei] Personen, bitte. - طاولة لشخصين/ثلاثة، من فضلك.
	2.	Haben Sie einen Tisch frei? - هل لديكم طاولة شاغرة؟
	3.	Ich habe eine Reservierung. - لدي حجز.
	4.	Wie lange ist die Wartezeit? - كم هو وقت الانتظار؟
	5.	Könnten wir bitte die Speisekarte haben? - هل يمكننا الحصول على قائمة الطعام، من فضلك؟

عند طلب الطعام

	1.	Ich hätte gerne… - أرغب في…
	2.	Was empfehlen Sie? - ماذا توصي به؟
	3.	Ich nehme… - سأأخذ…
	4.	Haben Sie vegetarische Gerichte? - هل لديكم أطباق نباتية؟
	5.	Ist das scharf? - هل هذا حار؟
	6.	Mit oder ohne… ? - مع أو بدون…؟
	7.	Könnte ich das ohne [Zwiebeln] haben? - هل يمكنني الحصول على ذلك بدون [بصل]؟
	8.	Könnte ich das bitte zum Mitnehmen haben? - هل يمكنني أخذ ذلك للمنزل؟

المشروبات

	1.	Wasser - ماء
	2.	Mineralwasser - ماء معدني
	3.	Saft - عصير
	4.	Bier - بيرة
	5.	Wein - نبيذ
	6.	Kaffee - قهوة
	7.	Tee - شاي
	8.	Cola - كوكاكولا

عبارات عند الدفع

	1.	Könnte ich die Rechnung bitte haben? - هل يمكنني الحصول على الفاتورة، من فضلك؟
	2.	Stimmt so. - هذا كافٍ (لإخبار النادل بأن الباقي هو إكرامية).
	3.	Haben Sie eine Karte? - هل تقبلون الدفع بالبطاقة؟
	4.	Mit Karte oder bar? - هل ستدفع نقدًا أم بالبطاقة؟
	5.	Ich möchte mit Karte bezahlen. - أود الدفع بالبطاقة.

عبارات شكر ووداع

	1.	Danke, es war sehr lecker! - شكرًا، كان طعامًا لذيذًا!
	2.	Es war ein angenehmer Aufenthalt. - كانت إقامة ممتعة.
	3.	Auf Wiedersehen! - إلى اللقاء!
	4.	Tschüss! - وداعًا!

استخدام هذه العبارات سيجعل تجربتك في المطعم في ألمانيا أكثر سلاسة وسهولة.`
,
  },
  hospital: {
    title: ' في المستشفى  ',
    description:'            ',

   
    code: `إليك مجموعة من الكلمات والعبارات المهمة التي قد تحتاجها في المشفى (المستشفى) باللغة الألمانية

المصطلحات الطبية الأساسية

	1.	Krankenhaus - مستشفى
	2.	Arzt/Ärztin - طبيب/طبيبة
	3.	Krankenpfleger/Krankenschwester - ممرض/ممرضة
	4.	Notaufnahme - قسم الطوارئ
	5.	Behandlung - علاج
	6.	Untersuchung - فحص
	7.	Sprechstunde - ساعة الاستشارة
	8.	Ambulanz - العيادة
	9.	Patient/Patientin - مريض/مريضة
	10.	Rezept - وصفة طبية
	11.	Medikamente - أدوية
	12.	Krankenversicherung - تأمين صحي
	13.	Bett - سرير
	14.	Zimmer - غرفة
	15.	Operation - عملية جراحية
	16.	Notfall - حالة طوارئ

أعراض وحالات صحية

	1.	Schmerzen - ألم
	2.	Fieber - حمى
	3.	Husten - سعال
	4.	Kopfschmerzen - صداع
	5.	Übelkeit - غثيان
	6.	Erbrechen - قيء
	7.	Atemnot - ضيق في التنفس
	8.	Allergie - حساسية
	9.	Verletzung - إصابة
	10.	Fraktur - كسر
	11.	Blutdruck - ضغط الدم
	12.	Herzprobleme - مشاكل في القلب
	13.	Hautausschlag - طفح جلدي

الأسئلة الهامة في المستشفى

	1.	Ich brauche einen Arzt. - أحتاج إلى طبيب.
	2.	Wo ist die Notaufnahme? - أين قسم الطوارئ؟
	3.	Haben Sie Schmerzen? - هل تشعر بألم؟
	4.	Wo tut es weh? - أين يؤلمك؟
	5.	Wie lange haben Sie das schon? - منذ متى وأنت تعاني من هذا؟
	6.	Haben Sie irgendwelche Vorerkrankungen? - هل لديك أي أمراض سابقة؟
	7.	Ich fühle mich nicht gut. - لا أشعر أنني بخير.
	8.	Brauchen Sie Medikamente? - هل تحتاج إلى أدوية؟
	9.	Könnten Sie mir bitte das Rezept geben? - هل يمكن أن تعطيني الوصفة الطبية، من فضلك؟

إجراءات المستشفى

	1.	Blutabnahme - أخذ عينة دم
	2.	Röntgen - أشعة سينية
	3.	Ultraschall - تصوير بالأمواج فوق الصوتية
	4.	Infusion - حقنة (وريد)
	5.	Narkose - تخدير
	6.	Wartezimmer - غرفة الانتظار
	7.	Entlassung - خروج من المستشفى
	8.	Krankschreibung - شهادة مرضية

الدفع والتأمين

	1.	Krankenkasse - تأمين صحي
	2.	Selbstzahler - الدفع بنفسك (دون تأمين صحي)
	3.	Zuzahlung - مساهمة مالية
	4.	Arztrechnung - فاتورة الطبيب

التوديع والاختتام

	1.	Gute Besserung! - أتمنى لك الشفاء العاجل!
	2.	Danke für Ihre Hilfe. - شكراً على مساعدتكم.
	3.	Auf Wiedersehen! - إلى اللقاء!

استخدام هذه الكلمات سيساعدك على التواصل بشكل أفضل إذا كنت بحاجة إلى الذهاب إلى المستشفى أو التعامل مع المشكلات الصحية في ألمانيا.`,
  },
  hous: {
    title: ' في المنزل ',
    description:'            ',

   
    code: `إليك مجموعة من الكلمات الألمانية التي تحتاجها في البيت مع معانيها بالعربية:

أجزاء المنزل (Teile des Hauses)

	1.	Haus - منزل
	2.	Wohnung - شقة
	3.	Zimmer - غرفة
	4.	Wohnzimmer - غرفة المعيشة
	5.	Schlafzimmer - غرفة النوم
	6.	Küche - مطبخ
	7.	Badezimmer - حمام
	8.	Flur - ممر
	9.	Esszimmer - غرفة الطعام
	10.	Kinderzimmer - غرفة الأطفال
	11.	Balkon - شرفة
	12.	Garten - حديقة
	13.	Keller - قبو
	14.	Dachboden - علية

الأثاث (Möbel)

	1.	Tisch - طاولة
	2.	Stuhl - كرسي
	3.	Sofa - أريكة
	4.	Bett - سرير
	5.	Schrank - خزانة
	6.	Regal - رف
	7.	Kommode - خزانة أدراج
	8.	Teppich - سجادة
	9.	Spiegel - مرآة
	10.	Lampe - مصباح
	11.	Fernseher - تلفاز
	12.	Vorhang - ستارة

الأجهزة المنزلية (Haushaltsgeräte)

	1.	Kühlschrank - ثلاجة
	2.	Herd - موقد
	3.	Backofen - فرن
	4.	Mikrowelle - ميكروويف
	5.	Spülmaschine - غسالة الصحون
	6.	Waschmaschine - غسالة الملابس
	7.	Staubsauger - مكنسة كهربائية
	8.	Föhn - مجفف شعر
	9.	Wasserkocher - غلاية ماء
	10.	Bügeleisen - مكواة

الأدوات المنزلية (Haushaltsgegenstände)

	1.	Teller - طبق
	2.	Glas - كوب زجاجي
	3.	Tasse - فنجان
	4.	Löffel - ملعقة
	5.	Gabel - شوكة
	6.	Messer - سكين
	7.	Topf - قدر
	8.	Pfanne - مقلاة
	9.	Besen - مكنسة يدوية
	10.	Eimer - دلو

مصطلحات متعلقة بالنظافة (Sauberkeit)

	1.	Seife - صابون
	2.	Handtuch - منشفة
	3.	Schwamm - إسفنجة
	4.	Putzmittel - مواد تنظيف
	5.	Müllbeutel - كيس القمامة
	6.	Mülleimer - سلة القمامة
	7.	Staub - غبار
	8.	Wäsche - غسيل الملابس

الأشياء اليومية (Alltägliche Dinge)

	1.	Schlüssel - مفتاح
	2.	Fernbedienung - جهاز التحكم عن بعد
	3.	Uhr - ساعة
	4.	Decke - بطانية
	5.	Kissen - وسادة
	6.	Blume - زهرة
	7.	Kerze - شمعة
	8.	Bild - صورة
	9.	Laptop - حاسوب محمول
	10.	Telefon - هاتف

العبارات المفيدة في البيت

	1.	Wo ist die Küche? - أين المطبخ؟
	2.	Ich mache sauber. - أنا أنظف.
	3.	Kannst du bitte das Licht anmachen? - هل يمكنك تشغيل الضوء؟
	4.	Ich brauche einen neuen Schlüssel. - أحتاج إلى مفتاح جديد.
	5.	Das Essen ist auf dem Tisch. - الطعام على الطاولة.
	6.	Kannst du das Fenster öffnen? - هل يمكنك فتح النافذة؟

عبارات لتقسيم المهام المنزلية

	1.	Ich wasche das Geschirr. - أنا أغسل الأطباق.
	2.	Wer saugt Staub? - من سيكنس الغبار؟
	3.	Ich bringe den Müll raus. - سأخرج القمامة.
	4.	Kannst du die Wäsche machen? - هل يمكنك القيام بالغسيل؟

هذه الكلمات والعبارات ستساعدك في التواصل بسهولة داخل المنزل عند التحدث بالألمانية!`,
  },
  polis: {
    title: ' في مركز الشرطة ',
    description:'            ',

   
    code:`
	إليك مجموعة من الكلمات والعبارات الألمانية التي قد تحتاجها عند زيارة مركز الشرطة (Polizeiwache):

1. المصطلحات الأساسية (Grundbegriffe)

	1.	Polizei - شرطة
	2.	Polizeiwache - مركز الشرطة
	3.	Polizist / Polizistin - شرطي / شرطية
	4.	Notruf - طوارئ
	5.	Personalausweis - بطاقة الهوية
	6.	Pass - جواز السفر
	7.	Führerschein - رخصة القيادة
	8.	Zeuge / Zeugin - شاهد / شاهدة
	9.	Dieb - لص
	10.	Verdacht - اشتباه
	11.	Tatort - موقع الجريمة

2. الإبلاغ عن حادث (Unfall oder Vorfall melden)

	1.	Ich möchte einen Vorfall melden. - أود الإبلاغ عن حادث.
	2.	Mein Ausweis wurde gestohlen. - تم سرقة هويتي.
	3.	Mein Auto wurde aufgebrochen. - تم اقتحام سيارتي.
	4.	Ich wurde überfallen. - تعرضت للاعتداء.
	5.	Ich habe etwas verloren. - فقدت شيئًا ما.
	6.	Ich habe meinen Pass verloren. - فقدت جواز سفري.
	7.	Ich habe einen Unfall gesehen. - رأيت حادثًا.
	8.	Ich brauche Hilfe. - أحتاج إلى المساعدة.
	9.	Jemand hat meine Tasche gestohlen. - شخص ما سرق حقيبتي.
	10.	Ich möchte eine Anzeige erstatten. - أريد تقديم بلاغ.

3. أسئلة شائعة عند الشرطة (Häufige Fragen bei der Polizei)

	1.	Was ist passiert? - ماذا حدث؟
	2.	Wann ist es passiert? - متى حدث ذلك؟
	3.	Wo ist es passiert? - أين حدث ذلك؟
	4.	Können Sie den Täter beschreiben? - هل يمكنك وصف الجاني؟
	5.	Haben Sie Zeugen gesehen? - هل رأيت شهودًا؟
	6.	Haben Sie Ihren Ausweis dabei? - هل لديك هويتك؟
	7.	Können Sie mir Ihre Adresse geben? - هل يمكنك إعطائي عنوانك؟

4. العبارات المتعلقة بالبلاغات (Meldungen und Anzeigen)

	1.	Ich möchte einen Diebstahl melden. - أود الإبلاغ عن سرقة.
	2.	Ich wurde betrogen. - تعرضت للاحتيال.
	3.	Mein Auto wurde gestohlen. - سرقت سيارتي.
	4.	Ich habe einen Unfall gemeldet. - أبلغت عن حادث.
	5.	Ich brauche eine Kopie des Polizeiberichts. - أحتاج إلى نسخة من تقرير الشرطة.
	6.	Mein Handy wurde gestohlen. - هاتفي سُرق.

5. مفردات متعلقة بالجرائم (Begriffe zu Straftaten)

	1.	Diebstahl - سرقة
	2.	Einbruch - اقتحام
	3.	Raub - سطو
	4.	Betrug - احتيال
	5.	Überfall - اعتداء
	6.	Körperverletzung - إصابة جسدية
	7.	Verbrechen - جريمة
	8.	Mord - قتل
	9.	Drogenhandel - تجارة المخدرات
	10.	Verkehrsunfall - حادث مرور

6. الطوارئ (Notfälle)

	1.	Rufen Sie bitte die Polizei! - من فضلك اتصل بالشرطة!
	2.	Ich bin in Gefahr. - أنا في خطر.
	3.	Hilfe, ich brauche die Polizei! - النجدة، أحتاج إلى الشرطة!
	4.	Notrufnummer in Deutschland: 110 - رقم الطوارئ في ألمانيا: 110.
	5.	Ich brauche sofort Hilfe! - أحتاج المساعدة فورًا!

7. أسئلة متعلقة بالمرور (Verkehr und Polizei)

	1.	Ich habe meinen Führerschein verloren. - فقدت رخصة القيادة.
	2.	Ich wurde geblitzt. - تم تصويري بالرادار.
	3.	Ich habe ein Strafzettel bekommen. - حصلت على مخالفة مرورية.
	4.	Wo kann ich die Strafe bezahlen? - أين يمكنني دفع الغرامة؟

8. نصائح مفيدة (Nützliche Tipps)

	•	Sprechen Sie Englisch? - هل تتحدث الإنجليزية؟
	•	Können Sie langsam sprechen? - هل يمكنك التحدث ببطء؟
	•	Können Sie mir das aufschreiben? - هل يمكنك كتابة ذلك لي؟
	•	Ich verstehe nicht. - لا أفهم.

هذه الكلمات والجمل ستساعدك على التواصل بفعالية مع الشرطة عند الحاجة في ألمانيا أو أي بلد ناطق بالألمانية.`,
  },
  post: {
    title: ' اتصالات  ',
    description:'            ',

   
    code:`في مركز البريد في ألمانيا، هذه بعض الكلمات والعبارات الألمانية التي قد تحتاجها:

الأساسيات:

	•	Postamt - مكتب البريد
	•	Brief - رسالة
	•	Paket - طرد
	•	Briefmarke - طابع بريد
	•	Umschlag - ظرف
	•	Absender - المرسل
	•	Empfänger - المستلم
	•	Adresse - عنوان
	•	Postleitzahl (PLZ) - الرمز البريدي
	•	Gewicht - الوزن
	•	Porto - رسوم البريد

الأسئلة الشائعة:

	•	Wie viel kostet das? - كم يكلف هذا؟
	•	Wann kommt das an? - متى سيصل؟
	•	Gibt es eine Sendungsverfolgung? - هل توجد خدمة تتبع الطرد؟
	•	Wo kann ich Briefmarken kaufen? - أين يمكنني شراء الطوابع؟
	•	Kann ich das hier abschicken? - هل يمكنني إرسال هذا هنا؟
	•	Brauche ich einen Umschlag? - هل أحتاج إلى ظرف؟

أنواع الخدمات:

	•	Einschreiben - بريد مسجل
	•	Express - بريد سريع
	•	Luftpost - بريد جوي
	•	Standardversand - شحن قياسي
	•	Nachnahme - الدفع عند التسليم

عبارات متعلقة بالطرد:

	•	Ich möchte ein Paket verschicken. - أريد إرسال طرد.
	•	Ist das Paket versichert? - هل الطرد مؤمَّن عليه؟
	•	Wie schwer ist das Paket? - كم يبلغ وزن الطرد؟
	•	Kann ich das Paket hier abholen? - هل يمكنني استلام الطرد هنا؟

خدمات إضافية:

	•	Postfach - صندوق بريد
	•	Paketabholung - استلام الطرود
	•	Zustellung - التسليم
	•	Nachverfolgung - تتبع

عبارات عامة:

	•	Danke für Ihre Hilfe. - شكرًا على مساعدتك.
	•	Entschuldigung, ich spreche nicht gut Deutsch. - عذرًا، لا أتحدث الألمانية جيدًا.

تعلُّم هذه الكلمات والعبارات سيُسهل عليك التعامل في مكتب البريد في ألمانيا!`
	},
	internet: {
		title: ' في مركز الشرطة ',
		description:'            ',
	
	   
		code:`عند زيارة شركة الاتصالات في ألمانيا، ستحتاج إلى مفردات وعبارات تساعدك في اختيار الخدمات المناسبة وفهم العروض المقدمة. إليك قائمة بالكلمات والعبارات المفيدة:

الأساسيات:

	•	Mobilfunkanbieter - شركة اتصالات
	•	Vertrag - عقد
	•	Prepaid - الدفع المسبق
	•	Tarif - الباقة
	•	Flatrate - خدمة غير محدودة
	•	Datenvolumen - حجم البيانات
	•	Netzabdeckung - تغطية الشبكة
	•	SIM-Karte - شريحة الهاتف
	•	Handynummer - رقم الجوال
	•	Festnetz - الهاتف الثابت
	•	WLAN (Wi-Fi) - شبكة الواي فاي

الخدمات والخيارات:

	•	Internet-Tarif - باقة الإنترنت
	•	Telefonie - المكالمات الهاتفية
	•	SMS-Flatrate - خدمة رسائل قصيرة غير محدودة
	•	EU-Roaming - التجوال داخل الاتحاد الأوروبي
	•	Vertragslaufzeit - مدة العقد
	•	Monatlich kündbar - قابل للإلغاء شهريًا
	•	Kombitarif - باقة مدمجة (إنترنت وهاتف)
	•	Speed - السرعة
	•	Zugangsdaten - بيانات الدخول

الأجهزة والمعدات:

	•	Router - جهاز الراوتر
	•	Modem - المودم
	•	Hotspot - نقطة اتصال الإنترنت
	•	Smartphone - الهاتف الذكي
	•	Zubehör - الإكسسوارات

أسئلة شائعة:

	•	Welche Tarife bieten Sie an? - ما الباقات التي تقدمونها؟
	•	Wie viel kostet die SIM-Karte? - كم تكلفة الشريحة؟
	•	Gibt es eine Aktivierungsgebühr? - هل هناك رسوم تفعيل؟
	•	Kann ich meine alte Nummer behalten? - هل يمكنني الاحتفاظ برقم هاتفي القديم؟
	•	Wie schnell ist das Internet? - ما سرعة الإنترنت؟
	•	Welche Netzabdeckung gibt es in meiner Region? - ما مدى تغطية الشبكة في منطقتي؟
	•	Gibt es Rabatte oder Sonderangebote? - هل توجد خصومات أو عروض خاصة؟
	•	Ist der Vertrag monatlich kündbar? - هل العقد قابل للإلغاء شهريًا؟

أثناء الاشتراك:

	•	Ich möchte einen neuen Vertrag abschließen. - أريد توقيع عقد جديد.
	•	Ich brauche einen Prepaid-Tarif. - أحتاج إلى باقة مسبقة الدفع.
	•	Ich suche einen Tarif mit viel Datenvolumen. - أبحث عن باقة تحتوي على حجم بيانات كبير.
	•	Können Sie mir die Vertragsbedingungen erklären? - هل يمكنك شرح شروط العقد؟
	•	Gibt es eine Möglichkeit, den Vertrag zu testen? - هل توجد إمكانية لتجربة العقد؟

حالات أخرى:

	•	Ich habe ein Problem mit meiner Verbindung. - لدي مشكلة في الاتصال.
	•	Ich möchte meinen Vertrag kündigen. - أريد إنهاء عقدي.
	•	Wie kann ich meine Rechnung bezahlen? - كيف يمكنني دفع الفاتورة؟
	•	Kann ich meinen Tarif wechseln? - هل يمكنني تغيير الباقة؟
	•	Haben Sie eine Kundenhotline? - هل لديكم خط دعم للعملاء؟

عبارات مفيدة:

	•	Danke für Ihre Hilfe. - شكرًا على مساعدتك.
	•	Ich spreche nicht gut Deutsch. Können wir auf Englisch sprechen? - لا أتحدث الألمانية جيدًا. هل يمكننا التحدث بالإنجليزية؟
	•	Können Sie das bitte erklären? - هل يمكنك توضيح ذلك؟

استخدام هذه الكلمات والعبارات يجعل تواصلك مع موظفي شركة الاتصالات أسهل وأكثر فعالية!`
		},
		trafik: {
			title: ' مركز المرور ',
			description:'            ',
		
		   
			code:`عند زيارة مركز المرور في ألمانيا (Führerscheinstelle أو Kfz-Zulassungsstelle)، قد تحتاج إلى بعض الكلمات والعبارات المفيدة للتعامل مع الإجراءات المتعلقة بالرخصة أو تسجيل السيارة. إليك أهمها:

الأساسيات:

	•	Führerschein - رخصة القيادة
	•	Führerscheinstelle - مركز إصدار رخص القيادة
	•	Kfz-Zulassungsstelle - مركز تسجيل السيارات
	•	Fahrzeug - مركبة
	•	Auto - سيارة
	•	Motorrad - دراجة نارية
	•	Kennzeichen - لوحة تسجيل السيارة
	•	Zulassung - تسجيل المركبة
	•	Anmeldung - تسجيل أو تسجيل دخول
	•	Abmeldung - إلغاء التسجيل
	•	Ummeldung - تغيير التسجيل (مثلاً عند الانتقال)
	•	Prüfung - اختبار

الوثائق المطلوبة:

	•	Personalausweis - بطاقة الهوية
	•	Reisepass - جواز السفر
	•	Wohnsitzanmeldung - شهادة تسجيل السكن
	•	Fahrzeugschein - استمارة تسجيل السيارة
	•	Fahrzeugbrief - وثيقة ملكية السيارة
	•	Versicherungsnachweis - إثبات التأمين
	•	TÜV-Bescheinigung - شهادة الفحص الفني (TÜV)
	•	Bescheinigung - شهادة أو مستند

الخدمات الشائعة:

	•	Führerschein beantragen - تقديم طلب للحصول على رخصة قيادة
	•	Führerschein verlängern - تجديد رخصة القيادة
	•	Prüfung ablegen - إجراء اختبار
	•	Auto anmelden - تسجيل سيارة
	•	Auto ummelden - تغيير تسجيل السيارة
	•	Auto abmelden - إلغاء تسجيل السيارة
	•	Kennzeichen reservieren - حجز لوحة تسجيل
	•	Ersatzführerschein - رخصة قيادة بديلة (في حال الفقدان)
	•	Verlustanzeige - بلاغ فقدان

الأسئلة الشائعة:

	•	Welche Unterlagen brauche ich? - ما هي الوثائق التي أحتاجها؟
	•	Wie lange dauert das? - كم من الوقت يستغرق ذلك؟
	•	Wie viel kostet das? - كم يكلف هذا؟
	•	Kann ich einen Termin vereinbaren? - هل يمكنني تحديد موعد؟
	•	Wo kann ich das Formular ausfüllen? - أين يمكنني تعبئة النموذج؟
	•	Wann kann ich meinen Führerschein abholen? - متى يمكنني استلام رخصة القيادة؟
	•	Kann ich mein Kennzeichen behalten? - هل يمكنني الاحتفاظ بلوحة التسجيل الخاصة بي؟

العبارات المتعلقة بالاختبارات:

	•	Theorieprüfung - اختبار النظري
	•	Praktische Prüfung - اختبار العملي
	•	Prüfungstermin - موعد الاختبار
	•	Prüfer - المُختبر
	•	Durchgefallen - رسبت
	•	Bestanden - نجحت

العبارات المفيدة:

	•	Ich möchte meinen Führerschein beantragen. - أود التقدم للحصول على رخصة القيادة.
	•	Ich möchte mein Auto anmelden. - أريد تسجيل سيارتي.
	•	Ich habe meine Dokumente verloren. - لقد فقدت مستنداتي.
	•	Ich bin neu hier und möchte meine Adresse ändern. - أنا جديد هنا وأرغب في تغيير عنواني.
	•	Gibt es eine Gebühr für die Ummeldung? - هل توجد رسوم لتغيير التسجيل؟

في حالة الطوارئ:

	•	Ich habe meinen Führerschein verloren. - فقدت رخصة القيادة الخاصة بي.
	•	Ich brauche eine Ersatzbescheinigung. - أحتاج إلى شهادة بديلة.
	•	Mein Fahrzeug ist gestohlen worden. - تم سرقة مركبتي.
	•	Ich habe eine Frage zur Versicherung. - لدي سؤال بخصوص التأمين.

مع هذه الكلمات والعبارات، يمكنك بسهولة التواصل مع موظفي مركز المرور وفهم الإجراءات اللازمة.`
			},
			rathous: {
				title: '  مركز البلدية  ',
				description:'            ',
			
			   
				code:`عند زيارة مركز البلدية في ألمانيا (Rathaus أو Bürgeramt)، ستحتاج إلى معرفة مجموعة من الكلمات والعبارات التي تساعدك في إنجاز معاملاتك بسهولة. إليك قائمة بالكلمات المفيدة:

الأساسيات:

	•	Rathaus - مبنى البلدية
	•	Bürgeramt - مكتب المواطنين
	•	Einwohnermeldeamt - مكتب تسجيل السكان
	•	Termin - موعد
	•	Anmeldung - تسجيل (مثلاً تسجيل السكن)
	•	Abmeldung - إلغاء التسجيل
	•	Ummeldung - تغيير التسجيل (مثلاً عند الانتقال إلى عنوان جديد)
	•	Ausweis - بطاقة الهوية
	•	Reisepass - جواز السفر
	•	Meldebescheinigung - شهادة تسجيل السكن
	•	Wohnsitz - محل الإقامة
	•	Familienstand - الحالة الاجتماعية

الوثائق المهمة:

	•	Personalausweis - بطاقة الهوية
	•	Reisepass - جواز السفر
	•	Mietvertrag - عقد الإيجار
	•	Geburtsurkunde - شهادة الميلاد
	•	Heiratsurkunde - شهادة الزواج
	•	Scheidungsurkunde - شهادة الطلاق
	•	Staatsangehörigkeit - الجنسية

الخدمات الشائعة:

	•	Wohnsitz anmelden - تسجيل عنوان السكن
	•	Wohnsitz abmelden - إلغاء تسجيل عنوان السكن
	•	Wohnsitz ummelden - تغيير عنوان السكن
	•	Meldebescheinigung beantragen - طلب شهادة تسجيل السكن
	•	Personalausweis beantragen - طلب بطاقة هوية
	•	Reisepass beantragen - طلب جواز سفر
	•	Gewerbeanmeldung - تسجيل نشاط تجاري
	•	Vollmacht erteilen - تقديم تفويض
	•	Beglaubigung - تصديق الأوراق

أسئلة شائعة:

	•	Welche Unterlagen brauche ich? - ما الوثائق التي أحتاجها؟
	•	Wie viel kostet das? - كم يكلف هذا؟
	•	Kann ich einen Termin vereinbaren? - هل يمكنني تحديد موعد؟
	•	Wie lange dauert die Bearbeitung? - كم تستغرق المعاملة؟
	•	Wo ist das Formular? - أين النموذج؟
	•	Wann bekomme ich meine Dokumente? - متى سأحصل على مستنداتي؟
	•	Muss ich persönlich kommen? - هل يجب أن أتي شخصيًا؟

العبارات المفيدة:

	•	Ich möchte meinen Wohnsitz anmelden. - أريد تسجيل عنوان سكني.
	•	Ich habe einen Termin um [Uhrzeit]. - لدي موعد في الساعة [الوقت].
	•	Ich brauche eine Meldebescheinigung. - أحتاج إلى شهادة تسجيل السكن.
	•	Ich möchte meinen Personalausweis verlängern. - أريد تجديد بطاقة الهوية الخاصة بي.
	•	Ich bin neu hier und möchte mich anmelden. - أنا جديد هنا وأرغب في التسجيل.
	•	Ich möchte eine Kopie meiner Geburtsurkunde beantragen. - أريد طلب نسخة من شهادة ميلادي.
	•	Ich habe meine Dokumente verloren. - لقد فقدت مستنداتي.

حالات خاصة:

	•	Ich ziehe aus einer anderen Stadt um. - أنتقل من مدينة أخرى.
	•	Ich habe meinen Wohnsitz im Ausland abgemeldet. - ألغيت تسجيل سكني في الخارج.
	•	Ich brauche eine Beglaubigung. - أحتاج إلى تصديق على مستند.
	•	Mein Personalausweis ist abgelaufen. - بطاقة الهوية الخاصة بي انتهت صلاحيتها.

كلمات أخرى قد تحتاجها:

	•	Steuernummer - الرقم الضريبي
	•	Kindergeld - إعانة الأطفال
	•	Elterngeld - إعانة الوالدين
	•	Kita-Anmeldung - تسجيل الأطفال في رياض الأطفال
	•	Führungszeugnis - شهادة حسن السيرة والسلوك

مع هذه الكلمات والعبارات، ستتمكن من التواصل بشكل أفضل مع موظفي مركز البلدية وإتمام معاملاتك بسهولة.`
				},
				bank: {
					title: '  البنك ',
					description:'            ',
				
				   
					code:`عند زيارة البنك  .  
	•	Bank - البنك
	•	Konto - حساب
	•	Girokonto - حساب جاري
	•	Sparkonto - حساب توفير
	•	IBAN - رقم الحساب الدولي
	•	BIC (SWIFT) - رمز البنك
	•	Karte - بطاقة
	•	EC-Karte - بطاقة الخصم
	•	Kreditkarte - بطاقة الائتمان
	•	Geld - المال
	•	Zinsen - الفائدة
	•	Schalter - شباك الخدمة
	•	Berater - مستشار

الخدمات الشائعة:

	•	Konto eröffnen - فتح حساب
	•	Konto schließen - إغلاق حساب
	•	Überweisung machen - إجراء تحويل
	•	Dauerauftrag einrichten - إعداد أمر دفع دوري
	•	Lastschrift - خصم مباشر
	•	Geld abheben - سحب المال
	•	Geld einzahlen - إيداع المال
	•	Online-Banking - الخدمات المصرفية عبر الإنترنت
	•	Kontoauszug - كشف حساب
	•	Kredit beantragen - طلب قرض
	•	Konto überziehen - السحب على المكشوف

الوثائق المهمة:

	•	Personalausweis - بطاقة الهوية
	•	Reisepass - جواز السفر
	•	Meldebescheinigung - شهادة تسجيل السكن
	•	Einkommensnachweis - إثبات الدخل
	•	Steueridentifikationsnummer (Steuer-ID) - الرقم الضريبي

أسئلة شائعة:

	•	Wie eröffne ich ein Konto? - كيف أفتح حسابًا؟
	•	Welche Dokumente brauche ich? - ما الوثائق التي أحتاجها؟
	•	Wie hoch sind die Gebühren? - كم تبلغ الرسوم؟
	•	Wie kann ich Geld überweisen? - كيف يمكنني تحويل الأموال؟
	•	Kann ich online Überweisungen machen? - هل يمكنني إجراء تحويلات عبر الإنترنت؟
	•	Wie aktiviere ich meine Karte? - كيف أفعّل بطاقتي؟
	•	Kann ich mein Konto online verwalten? - هل يمكنني إدارة حسابي عبر الإنترنت؟
	•	Welche Zinsen gibt es für ein Sparkonto? - ما هي الفائدة على حساب التوفير؟

العبارات المفيدة:

	•	Ich möchte ein Konto eröffnen. - أريد فتح حساب.
	•	Ich habe meine Karte verloren. - لقد فقدت بطاقتي.
	•	Ich möchte Geld abheben. - أريد سحب المال.
	•	Ich brauche einen Kontoauszug. - أحتاج إلى كشف حساب.
	•	Ich möchte ein Problem mit meiner Überweisung klären. - أريد حل مشكلة في التحويل الخاص بي.
	•	Ich suche Informationen über einen Kredit. - أبحث عن معلومات حول القروض.
	•	Wie ändere ich meine Kontodaten? - كيف أغيّر بيانات حسابي؟
	•	Ich möchte mein Online-Banking aktivieren. - أريد تفعيل الخدمات المصرفية عبر الإنترنت.

كلمات إضافية قد تكون مفيدة:

	•	Geldautomat (ATM) - جهاز الصراف الآلي
	•	PIN - الرقم السري
	•	Sperren - حظر (مثلاً حظر البطاقة)
	•	Gebühr - الرسوم
	•	Beratungstermin - موعد استشارة
	•	Kontoausgleich - تسوية الحساب
	•	Anlageberatung - استشارة استثمارية
	•	Hypothek - قرض عقاري

حالات طارئة:

	•	Meine Karte wurde gestohlen. - تمت سرقة بطاقتي.
	•	Ich habe eine unautorisierte Abbuchung auf meinem Konto. - يوجد خصم غير مُصرّح به في حسابي.
	•	Mein Online-Banking funktioniert nicht. - الخدمات المصرفية عبر الإنترنت لا تعمل.
	•	Ich brauche sofort Hilfe. - أحتاج إلى مساعدة فورية.

مع هذه الكلمات والعبارات، ستتمكن من إدارة جميع معاملاتك البنكية بسهولة في ألمانيا!`
					},
					shoping: {
						title: '  التسوق ',
						description:'            ',
					
					   
						code:`عند التسوق في ألمانيا، سواء في السوبرماركت أو المتاجر الأخرى، ستحتاج إلى مجموعة من الكلمات والعبارات التي تساعدك في التعامل مع البائعين وفهم المنتجات. إليك قائمة بالكلمات المفيدة:

الكلمات الأساسية:

	•	Einkaufen - التسوق
	•	Supermarkt - سوبرماركت
	•	Geschäft/Laden - متجر
	•	Markt - سوق
	•	Einkaufswagen - عربة التسوق
	•	Einkaufskorb - سلة التسوق
	•	Kasse - صندوق الدفع
	•	Preis - السعر
	•	Rabatt - خصم
	•	Angebot - عرض خاص
	•	Quittung/Rechnung - إيصال/فاتورة
	•	Karte - بطاقة
	•	Kreditkarte - بطاقة الائتمان
	•	EC-Karte - بطاقة الخصم

منتجات في السوبرماركت:

	•	Lebensmittel - المواد الغذائية
	•	Obst - الفواكه
	•	Gemüse - الخضروات
	•	Fleisch - اللحم
	•	Geflügel - الدواجن
	•	Fisch - السمك
	•	Backwaren - المخبوزات
	•	Milchprodukte - منتجات الألبان
	•	Getränke - المشروبات
	•	Konserven - المعلبات
	•	Snacks - وجبات خفيفة

مقاسات الملابس:

	•	Größe - الحجم/المقاس
	•	S (Klein) - صغير
	•	M (Mittel) - متوسط
	•	L (Groß) - كبير
	•	XL (Extra Groß) - كبير جدًا
	•	Anprobieren - تجربة الملابس

أسئلة شائعة:

	•	Wie viel kostet das? - كم سعر هذا؟
	•	Haben Sie das in einer anderen Größe/Farbe? - هل لديكم هذا بمقاس/لون آخر؟
	•	Gibt es heute Angebote? - هل توجد عروض اليوم؟
	•	Wo finde ich [Produkt]? - أين أجد [المنتج]؟
	•	Kann ich mit Karte bezahlen? - هل يمكنني الدفع بالبطاقة؟
	•	Kann ich bar bezahlen? - هل يمكنني الدفع نقدًا؟
	•	Haben Sie eine Plastiktüte? - هل لديكم كيس بلاستيكي؟
	•	Kann ich das umtauschen? - هل يمكنني استبدال هذا؟

العبارات المفيدة:

	•	Ich suche [Produkt]. - أبحث عن [المنتج].
	•	Ich brauche Hilfe. - أحتاج إلى مساعدة.
	•	Ich möchte das kaufen. - أريد شراء هذا.
	•	Das ist zu teuer. - هذا غالٍ جدًا.
	•	Kann ich das anprobieren? - هل يمكنني تجربة هذا؟
	•	Wo ist die Kasse? - أين صندوق الدفع؟
	•	Ich möchte mit Karte bezahlen. - أريد الدفع بالبطاقة.

كلمات مفيدة أخرى:

	•	Bioprodukte - منتجات عضوية
	•	Frisch - طازج
	•	Tiefgekühlt - مجمد
	•	Verpackt - مُعبأ
	•	Gewicht - الوزن
	•	Pfand - وديعة (لعبوات القابلة للإرجاع)
	•	Reduziert - مخفض

حالات خاصة:

	•	Das ist nicht, was ich gesucht habe. - هذا ليس ما كنت أبحث عنه.
	•	Ich habe kein Kleingeld. - ليس لدي فكة.
	•	Können Sie mir den Weg zur Umkleide zeigen? - هل يمكنك أن تريني طريق غرفة القياس؟
	•	Ich möchte eine Rückerstattung. - أريد استرداد المال.
	•	Können Sie das einpacken? - هل يمكنك تغليف هذا؟

مع هذه الكلمات والعبارات، ستتمكن من إدارة تجربة التسوق بسهولة في ألمانيا، سواء كنت في متجر للمواد الغذائية أو لبيع الملابس أو حتى في الأسواق.`
						},
						years: {
							title: '  السنة والايام  ',
							description:'            ',
						
						   
							code:`السنة والأيام باللغة الألمانية:

أيام الأسبوع (Wochentage):

	1.	Montag - الإثنين
	2.	Dienstag - الثلاثاء
	3.	Mittwoch - الأربعاء
	4.	Donnerstag - الخميس
	5.	Freitag - الجمعة
	6.	Samstag - السبت
	7.	Sonntag - الأحد

أجزاء اليوم (Tageszeiten):

	•	Morgen - الصباح
	•	Vormittag - قبل الظهر
	•	Mittag - الظهر
	•	Nachmittag - بعد الظهر
	•	Abend - المساء
	•	Nacht - الليل

الأشهر (Monate):

	1.	Januar - يناير
	2.	Februar - فبراير
	3.	März - مارس
	4.	April - أبريل
	5.	Mai - مايو
	6.	Juni - يونيو
	7.	Juli - يوليو
	8.	August - أغسطس
	9.	September - سبتمبر
	10.	Oktober - أكتوبر
	11.	November - نوفمبر
	12.	Dezember - ديسمبر

الفصول (Jahreszeiten):

	•	Frühling - الربيع
	•	Sommer - الصيف
	•	Herbst - الخريف
	•	Winter - الشتاء

كلمات وعبارات مفيدة:

	•	Tag - يوم
	•	Woche - أسبوع
	•	Monat - شهر
	•	Jahr - سنة
	•	Wochenende - عطلة نهاية الأسبوع
	•	Heute - اليوم
	•	Gestern - البارحة
	•	Morgen - غدًا
	•	Übermorgen - بعد غد
	•	Vorgestern - قبل البارحة
	•	Jahreszeit - فصل
	•	Feiertag - يوم عطلة رسمية

أمثلة على الجمل:

	•	Welcher Tag ist heute? - ما هو اليوم؟
	•	Heute ist Montag. - اليوم هو الإثنين.
	•	Im Januar ist es sehr kalt. - في شهر يناير يكون الجو باردًا جدًا.
	•	Der Sommer beginnt im Juni. - الصيف يبدأ في يونيو.
	•	Hast du am Wochenende Zeit? - هل لديك وقت في عطلة نهاية الأسبوع؟

مع هذه الكلمات والجمل، يمكنك التحدث عن الوقت والأيام بسهولة في اللغة الألمانية!`
							},
							wather: {
								title: ' الطقس  ',
								description:'            ',
							
							   
								code:`إليك بعض المصطلحات المتعلقة بالطقس في اللغة الألمانية، والتي تساعدك في التحدث عن حالة الجو:

حالات الطقس (Wetterzustände):

	1.	Sonnig - مشمس
	2.	Bewölkt - غائم
	3.	Regnerisch - ممطر
	4.	Schnee - ثلج
	5.	Stürmisch - عاصف
	6.	Windig - عاصف (رياح)
	7.	Kalt - بارد
	8.	Heiß - حار
	9.	Mild - معتدل
	10.	Kühl - بارد
	11.	Feucht - رطب
	12.	Nebel - ضباب
	13.	Frost - صقيع
	14.	Gewitter - عاصفة رعدية
	15.	Trocken - جاف

المصطلحات المرتبطة بالطقس:

	•	Regen - مطر
	•	Schnee - ثلج
	•	Hagel - برد (الكرات الثلجية)
	•	Sturm - عاصفة
	•	Wolken - سحب
	•	Wind - الرياح
	•	Temperatur - درجة الحرارة
	•	Luftfeuchtigkeit - الرطوبة
	•	Wettervorhersage - التنبؤ بالطقس
	•	Unwetter - طقس سيء/عاصفة

عبارات مفيدة:

	1.	Wie ist das Wetter heute? - كيف هو الطقس اليوم؟
	2.	Es ist sehr sonnig. - الجو مشمس جدًا.
	3.	Es regnet. - إنها تمطر.
	4.	Es schneit. - إنها تثلج.
	5.	Es ist sehr windig. - الجو عاصف جدًا.
	6.	Der Himmel ist bewölkt. - السماء غائمة.
	7.	Es ist heiß draußen. - الجو حار في الخارج.
	8.	Es wird morgen regnen. - ستمطر غدًا.
	9.	Es ist kalt heute. - الجو بارد اليوم.

كيفية السؤال عن الطقس:

	•	Wie wird das Wetter morgen? - كيف سيكون الطقس غدًا؟
	•	Gibt es heute einen Sturm? - هل هناك عاصفة اليوم؟
	•	Wird es morgen schneien? - هل سيثلج غدًا؟
	•	Ist es heute feucht? - هل الجو رطب اليوم؟

هذه الكلمات والعبارات ستساعدك على التحدث عن الطقس باللغة الألمانية بشكل جيد.
								`
								},
								mathematik: {
									title: ' الرياضيات ',
									description:'            ',
								
								   
									code:`إليك قائمة ببعض الكلمات والمصطلحات الرياضية باللغة الألمانية مع ترجمتها إلى العربية:

المفردات الأساسية في الرياضيات:

	1.	Mathematik - الرياضيات
	2.	Zahlen - الأرقام
	3•	Ganzzahlen - الأعداد الصحيحة
	4•	Brüche - الكسور
	5•	Dezimalzahlen - الأعداد العشرية
	6.	Addition - الجمع
	7.	Subtraktion - الطرح
	8.	Multiplikation - الضرب
	9.	Division - القسمة
	10.	Gleichung - معادلة
	11.	Formel - معادلة/صيغة
	12.	Variable - متغير
	13.	Kreis - دائرة
	14.	Quadrat - مربع
	15.	Rechteck - مستطيل
	16.	Dreieck - مثلث
	17.	Parallelogramm - متوازي الأضلاع
	18.	Kegel - مخروط
	19.	Kugel - كرة
	20.	Zylinder - اسطوانة
	21.	Winkel - زاوية
	22	Rechter Winkel - زاوية قائمة
	23•	Spitzer Winkel - زاوية حادة
	24•	Stumpfer Winkel - زاوية منفرجة
	25.	Fläche - مساحة
	26.	Volumen - الحجم

مصطلحات حسابية:

	1.	Summe - المجموع
	2.	Differenz - الفرق
	3.	Produkt - ناتج الضرب
	4.	Quotient - حاصل القسمة
	5.	Durchschnitt - المتوسط
	6.	Prozentsatz - النسبة المئوية
	7.	Bruch - كسر
	8.	Teil - جزء
	9.	Ganzes - الكل
	10.	Faktor - عامل
	11.	Gegenteil - المعاكس
	12.	Wurzel - جذر
	13.	Exponent - أس (في الرياضيات)
	14.	Potenz - قوة
	15.	Logarithmus - لوغاريتم
	16.	Kombination - التوليف
	17.	Permutation - ترتيب

العمليات الرياضية:

	1.	Berechnen - حساب
	2.	Lösen - حل
	3.	Multiplizieren - ضرب
	4.	Addieren - جمع
	5.	Subtrahieren - طرح
	6.	Dividieren - قسمة
	7.	Vereinfachen - تبسيط
	8.	Erweitern - توسيع
	9.	Kürzen - اختصار
	10.	Vergleichen - مقارنة

الجبر والهندسة:

	1.	Unbekannte - مجهول
	2.	Gleichungssystem - نظام معادلات
	3.	Längenmaß - وحدة قياس الطول
	4.	Flächenmaß - وحدة قياس المساحة
	5.	Raummaß - وحدة قياس الحجم
	6.	Symmetrie - تماثل
	7.	Gerade - خط مستقيم
	8.	Parallele - متوازي
	9.	Senkrecht - عمودي
	10.	Drehung - دوران
	11.	Spiegelung - انعكاس

أمثلة على جمل رياضية:

	1.	2 plus 3 ist gleich 5. - 2 زائد 3 يساوي 5.
	2.	Die Fläche eines Rechtecks wird mit Länge mal Breite berechnet. - يتم حساب مساحة المستطيل بضرب الطول في العرض.
	3.	Was ist das Produkt von 6 und 7? - ما هو ناتج ضرب 6 في 7؟
	4.	Der Winkel zwischen den beiden Linien ist 90 Grad. - الزاوية بين الخطين هي 90 درجة.
	5.	Um den Umfang des Kreises zu berechnen, multiplizieren Sie den Durchmesser mit π. - لحساب محيط الدائرة، اضرب القطر في باي.

مع هذه الكلمات والعبارات، يمكنك التحدث بشكل أفضل عن المفاهيم الرياضية في اللغة الألمانية!`
									},
									natur: {
										title: '  الأحياء  ',
										description:'            ',
									
									   
										code:`إليك بعض الكلمات والمصطلحات التي قد تكون مفيدة في مجال الإحياء (البيئة والحفاظ على الطبيعة) باللغة الألمانية:

المصطلحات الأساسية في الإحياء والبيئة:

	1.	Umweltschutz - حماية البيئة
	2.	Naturschutz - الحفاظ على الطبيعة
	3.	Nachhaltigkeit - الاستدامة
	4.	Ökologie - علم البيئة
	5.	Umweltverschmutzung - تلوث البيئة
	6.	Klimawandel - تغير المناخ
	7.	Kohlenstoffdioxid - ثاني أكسيد الكربون
	8.	Erneuerbare Energie - الطاقة المتجددة
	9.	Solarenergie - الطاقة الشمسية
	10.	Windenergie - طاقة الرياح
	11.	Wasserkraft - طاقة المياه
	12.	Biomasse - الكتلة الحيوية
	13.	Recycling - إعادة التدوير
	14.	Abfall - نفايات
	15.	Plastikmüll - النفايات البلاستيكية
	16.	Ökologisch - بيئي
	17.	Umweltfreundlich - صديق للبيئة
	18.	Abgase - الغازات العادمة
	19.	Luftverschmutzung - تلوث الهواء
	20.	Wasserverschmutzung - تلوث المياه
	21.	Abholzung - قطع الأشجار
	22.	Bodenverseuchung - تلوث التربة
	23.	Biodiversität - التنوع البيولوجي
	24.	Schutzgebiete - محميات
	25.	Natürliche Ressourcen - الموارد الطبيعية

المفردات المتعلقة بالحيوانات والنباتات:

	1.	Tierarten - أنواع الحيوانات
	2.	Pflanzenarten - أنواع النباتات
	3.	Artenschutz - حماية الأنواع
	4.	Endangered species - الأنواع المهددة بالانقراض
	5.	Ökosystem - النظام البيئي
	6.	Fauna - الحيوانات
	7.	Flora - النباتات
	8.	Bäume pflanzen - زرع الأشجار
	9.	Natürliche Lebensräume - الموائل الطبيعية
	10.	Wildtiere - الحيوانات البرية
	11.	Vögel - الطيور
	12.	Insekten - الحشرات

مصطلحات متعلقة بالطاقة والنقل:

	1.	Elektroauto - سيارة كهربائية
	2.	Fahrgemeinschaft - التجمع في السيارة
	3.	Energieverbrauch - استهلاك الطاقة
	4.	Energiesparen - توفير الطاقة
	5.	Fossile Brennstoffe - الوقود الأحفوري
	6.	CO₂-Emissionen - انبعاثات ثاني أكسيد الكربون
	7.	Grüne Energie - الطاقة الخضراء
	8.	Klimaschutz - حماية المناخ

العبارات المفيدة:

	1.	Wir müssen den Umweltschutz ernst nehmen. - يجب أن نأخذ حماية البيئة على محمل الجد.
	2.	Das Recycling hilft, Abfälle zu reduzieren. - يساعد إعادة التدوير في تقليل النفايات.
	3.	Der Klimawandel betrifft uns alle. - يؤثر تغير المناخ على الجميع.
	4.	Erneuerbare Energien sind die Zukunft. - الطاقة المتجددة هي المستقبل.
	5.	Wir müssen den Plastikmüll reduzieren. - يجب علينا تقليل النفايات البلاستيكية.
	6.	Bäume zu pflanzen ist wichtig für den Umweltschutz. - زرع الأشجار مهم لحماية البيئة.
	7.	Die Biodiversität ist entscheidend für ein gesundes Ökosystem. - التنوع البيولوجي أساسي لنظام بيئي صحي.
	8.	Es ist wichtig, natürliche Ressourcen zu schonen. - من المهم الحفاظ على الموارد الطبيعية.

مفردات إضافية:

	1.	Greenwashing - الخداع البيئي (الشركات التي تدعي أنها صديقة للبيئة دون أن تكون كذلك)
	2.	Wassersparen - توفير المياه
	3.	Zero Waste - صفر نفايات
	4.	Kreislaufwirtschaft - الاقتصاد الدائري
	5.	Umweltbewusstsein - الوعي البيئي
	6.	Energieeffizienz - كفاءة الطاقة

هذه المفردات ستساعدك على التحدث وفهم موضوعات البيئة والإحياء باللغة الألمانية.`
										},
										sport: {
											title: ' الرياضة ',
											description:'            ',
										
										   
											code:`إليك قائمة بكلمات ومصطلحات رياضية باللغة الألمانية مع ترجمتها إلى العربية:

المفردات الأساسية في الرياضة:

	1.	Sport - الرياضة
	2.	Sportart - نوع الرياضة
	3.	Athlet - رياضي
	4.	Trainer - مدرب
	5.	Mannschaft - فريق
	6.	Wettbewerb - مسابقة
	7.	Spiel - مباراة/لعبة
	8.	Ergebnis - نتيجة
	9.	Sieg - فوز
	10.	Niederlage - هزيمة
	11.	Unentschieden - تعادل
	12.	Punkt - نقطة
	13.	Tor - هدف
	14.	Spieler - لاعب
	15.	Schiedsrichter - حكم
	16.	Zuschauer - مشجع
	17.	Fans - جماهير
	18.	Weltmeister - بطل العالم
	19.	Olympische Spiele - الألعاب الأولمبية
	20.	Rekord - رقم قياسي

أنواع الرياضات (Sportarten):

	1.	Fußball - كرة القدم
	2.	Basketball - كرة السلة
	3.	Handball - كرة اليد
	4.	Tennis - التنس
	5.	Schwimmen - السباحة
	6.	Laufen - الجري
	7.	Radfahren - ركوب الدراجات
	8.	Boxen - الملاكمة
	9.	Volleyball - الكرة الطائرة
	10.	Eishockey - الهوكي على الجليد
	11.	Golf - الجولف
	12.	Rugby - الرجبي
	13.	Klettern - التسلق
	14.	Turnen - الجمباز
	15.	Skifahren - التزلج على الجليد
	16.	Wrestling - المصارعة
	17.	Judo - الجودو
	18.	Fechten - المبارزة

المصطلحات الرياضية الأخرى:

	1.	Training - تدريب
	2.	Übung - تمرين
	3.	Kondition - لياقة بدنية
	4.	Fitness - لياقة
	5.	Ausdauer - قدرة التحمل
	6.	Stärke - القوة
	7.	Schnelligkeit - السرعة
	8.	Teamarbeit - العمل الجماعي
	9.	Motivation - تحفيز
	10.	Ziel - هدف
	11.	Erholung - استراحة
	12.	Verletzung - إصابة
	13.	Rehabilitation - إعادة تأهيل
	14.	Medaille - ميدالية
	15.	Goldmedaille - الميدالية الذهبية
	16.	Silbermedaille - الميدالية الفضية
	17.	Bronzemedaille - الميدالية البرونزية

أمثلة على جمل رياضية:

	1.	Das Spiel endet mit einem Unentschieden. - تنتهي المباراة بالتعادل.
	2.	Die Mannschaft hat den Wettbewerb gewonnen. - فاز الفريق بالمسابقة.
	3.	Er ist der beste Spieler im Team. - هو أفضل لاعب في الفريق.
	4.	Sie hat die Goldmedaille gewonnen. - فازت بالميدالية الذهبية.
	5.	Der Trainer gibt uns heute ein hartes Training. - المدرب سيعطينا تدريبًا شاقًا اليوم.
	6.	Wir müssen unsere Ausdauer verbessern. - يجب أن نحسن قدرتنا على التحمل.
	7.	Der Schiedsrichter entscheidet das Spiel. - الحكم يقرر نتيجة المباراة.
	8.	Die Fans feiern den Sieg. - المشجعون يحتفلون بالفوز.

الأدوات الرياضية (Sportausrüstung):

	1.	Ball - كرة
	2.	Schläger - مضرب
	3.	Schuhe - أحذية
	4.	Handschuhe - قفازات
	5.	Helm - خوذة
	6.	Trikot - زي رياضي
	7.	Hantel - دامبل (أثقال)
	8.	Fahrrad - دراجة
	9.	Schwimmbrille - نظارات السباحة
	10.	Torwand - مرمى

المصطلحات المتعلقة بالمسابقات والجوائز:

	1.	Weltmeisterschaft - بطولة العالم
	2.	Europameisterschaft - بطولة أوروبا
	3.	Olympische Spiele - الألعاب الأولمبية
	4.	Preis - جائزة
	5.	Medaille - ميدالية
	6.	Pokal - كأس
	7.	Champion - بطل

هذه الكلمات والمصطلحات ستساعدك على التحدث وفهم المواضيع الرياضية باللغة الألمانية بشكل أفضل!`
											},
											play: {
												title: ' الألعاب  ',
												description:'            ',
											
											   
												code:`إليك بعض الكلمات والمصطلحات المتعلقة بالألعاب باللغة الألمانية مع ترجمتها إلى العربية:

المصطلحات العامة للألعاب:

	1.	Spiel - لعبة
	2.	Spielzeug - لعبة (ألعاب الأطفال)
	3.	Spielen - يلعب
	4.	Spielregeln - قواعد اللعبة
	5.	Würfeln - رمي النرد
	6.	Karten spielen - لعب الورق
	7.	Brettspiel - لعبة لوحية
	8.	Gesellschaftsspiel - لعبة جماعية
	9.	Puzzle - أحجية
	10.	Online-Spiel - لعبة عبر الإنترنت
	11.	Multiplayer - متعدد اللاعبين
	12.	Einzelspieler - لاعب فردي
	13.	Spielstand - حالة اللعبة
	14.	Spieler - لاعب
	15.	Gewinner - الفائز
	16.	Verlierer - الخاسر
	17.	Ziel - الهدف
	18.	Punkte - نقاط
	19.	Runde - جولة
	20.	Level - مستوى

ألعاب الطاولة:

	1.	Schach - الشطرنج
	2.	Dame - الداما
	3.	Mensch ärgere dich nicht - لعبة “مُلِك المزعج”
	4.	Monopoly - مونوبولي
	5.	Scrabble - سكربل (لعبة الكلمات)
	6.	Karten - أوراق اللعب
	•	Kartenspiel - لعبة الورق
	7.	Mühle - لعبة المطحنة
	8.	Backgammon - الطاولة

ألعاب الفيديو (Videospiele):

	1.	Videospiel - لعبة فيديو
	2.	Konsole - جهاز تحكم (أو جهاز الألعاب)
	3.	PC-Spiel - لعبة على الكمبيوتر
	4.	Ego-Shooter - لعبة إطلاق النار من منظور الشخص الأول
	5.	Abenteuer-Spiel - لعبة مغامرات
	6.	Rennspiel - لعبة سباق
	7.	Strategie-Spiel - لعبة استراتيجية
	8.	Rollenspiel - لعبة تقمص الأدوار
	9.	Simulation - محاكاة
	10.	Sandbox-Spiel - لعبة عالم مفتوح

الألعاب التقليدية (Traditionelle Spiele):

	1.	Seilspringen - القفز بالحبل
	2.	Fangen - لعبة الاصطفاف
	3.	Verstecken - لعبة الاختباء
	4.	Hüpfspiel - لعبة القفز
	5.	Gummitwist - لعبة الحبل المطاطي
	6.	Besenreiten - ركوب المكنسة (لعبة تقليدية للأطفال)
	7.	Luftballon werfen - رمي البالون
	8.	Tanzen - الرقص (في بعض الألعاب الجماعية)

المصطلحات المتعلقة بالألعاب الرياضية:

	1.	Sportspiel - لعبة رياضية
	2.	Fußball - كرة القدم
	3.	Basketball - كرة السلة
	4.	Tennis - التنس
	5.	Volleyball - الكرة الطائرة
	6.	Handball - كرة اليد
	7.	Tischtennis - تنس الطاولة
	8.	Boccia - لعبة البوتشي (البولينغ الإيطالي)

المصطلحات المتعلقة بالمنافسة:

	1.	Wettbewerb - منافسة
	2.	Turnier - بطولة
	3.	Champion - بطل
	4.	Medaillen - ميداليات
	5.	Pokal - كأس
	6.	Rangliste - تصنيف
	7.	Wettkampf - مباراة/مسابقة
	8.	Herausforderung - تحدي
	9.	Sieger - الفائز
	10.	Verlierer - الخاسر

المفردات المتعلقة بالنظام والتفاعل في الألعاب:

	1.	Zug - دور (في الألعاب مثل الشطرنج)
	2.	Strategie - استراتيجية
	3.	Taktik - تكتيك
	4.	Interaktiv - تفاعلي
	5.	Kollaboration - تعاون
	6.	Koop-Spiel - لعبة تعاونية
	7.	Herausforderung - تحدي
	8.	Belohnung - مكافأة
	9.	Strafen - عقوبات

العبارات الشائعة المتعلقة بالألعاب:

	1.	Wer ist der Gewinner? - من هو الفائز؟
	2.	Es ist ein Unentschieden. - إنه تعادل.
	3.	Dein Zug! - دورك!
	4.	Lass uns ein Spiel spielen. - دعنا نلعب لعبة.
	5.	Ich habe verloren. - لقد خسرت.
	6.	Das ist ein spannendes Spiel! - هذه لعبة مثيرة!
	7.	Viel Spaß beim Spielen! - استمتع باللعب!

مع هذه الكلمات والعبارات، يمكنك التحدث بشكل جيد عن الألعاب بأنواعها المختلفة في اللغة الألمانية.`
												},
												koch: {
													title: ' الطعام والطبخ ',
													description:'            ',
												
												   
													code:`إليك قائمة من الكلمات والمصطلحات المتعلقة بالطبخ باللغة الألمانية مع ترجمتها إلى العربية:

المفردات الأساسية في الطبخ:

	1.	Kochen - الطهي
	2.	Kochkunst - فن الطهي
	3.	Küche - المطبخ
	4.	Rezept - وصفة
	5.	Zutaten - مكونات
	6.	Gericht - طبق
	7.	Essen - طعام
	8.	Mahlzeit - وجبة
	9.	Frühstück - إفطار
	10.	Mittagessen - غداء
	11.	Abendessen - عشاء
	12.	Snack - وجبة خفيفة
	13.	Getränke - مشروبات
	14.	Zubereitung - تحضير
	15.	Kochtopf - قدر
	16.	Pfanne - مقلاة
	17.	Backofen - فرن
	18.	Mikrowelle - ميكروويف
	19.	Herd - موقد
	20.	Teller - طبق
	21.	Schüssel - وعاء
	22.	Glas - كوب
	23.	Besteck - أدوات المائدة
	24.	Löffel - ملعقة
	25.	Gabel - شوكة
	26.	Messer - سكين

الأساليب الأساسية للطهي:

	1.	Braten - قلي/تحمير
	2.	Kochen - غلي
	3.	Backen - خبز
	4.	Grillen - شواء
	5.	Dämpfen - تبخير
	6.	Frittieren - قلى
	7.	Rühren - تحريك
	8.	Schneiden - تقطيع
	9.	Hackfleisch machen - فرم اللحم
	10.	Pürieren - هرس
	11.	Abschmecken - تذوق الطعام
	12.	Würzen - تتبيل
	13.	Marinieren - نقع
	14.	Einweichen - نقع (المكونات مثل الفاصوليا أو الأرز)
	15.	Kneten - عجن

المكونات والمكونات الأساسية:

	1.	Fleisch - لحم
	•	Rindfleisch - لحم بقر
	•	Schweinefleisch - لحم خنزير
	•	Hühnerfleisch - لحم دجاج
	2.	Gemüse - خضروات
	•	Kartoffeln - بطاطس
	•	Tomaten - طماطم
	•	Zwiebeln - بصل
	•	Karotten - جزر
	•	Paprika - فلفل
	3.	Obst - فاكهة
	•	Äpfel - تفاح
	•	Bananen - موز
	•	Beeren - توت
	•	Orangen - برتقال
	4.	Milchprodukte - منتجات الألبان
	•	Milch - حليب
	•	Käse - جبن
	•	Joghurt - زبادي
	5.	Kohlenhydrate - كربوهيدرات
	•	Reis - أرز
	•	Nudeln - معكرونة
	•	Brot - خبز
	•	Mehl - دقيق
	6.	Gewürze - توابل
	•	Salz - ملح
	•	Pfeffer - فلفل
	•	Zucker - سكر
	•	Paprika - بابريكا
	•	Knoblauch - ثوم
	•	Kurkuma - كركم
	•	Curry - كاري
	7.	Öl - زيت
	•	Olivenöl - زيت الزيتون
	•	Sonnenblumenöl - زيت عباد الشمس

الأطباق والمأكولات:

	1.	Suppen - شوربات
	•	Gemüsesuppe - شوربة الخضار
	•	Hühnersuppe - شوربة الدجاج
	2.	Salat - سلطة
	•	Gemüsesalat - سلطة خضروات
	•	Kartoffelsalat - سلطة البطاطس
	3.	Hauptgericht - الطبق الرئيسي
	•	Steak - شريحة لحم
	•	Fisch - سمك
	4.	Nachspeise - حلوى
	•	Kuchen - كعك
	•	Kekse - بسكويت
	•	Eis - آيس كريم
	•	Pudding - بودينغ
	5.	Saucen - صلصات
	•	Tomatensauce - صلصة الطماطم
	•	Käsesauce - صلصة الجبن
	•	Bechamelsauce - صلصة البشاميل

أدوات المطبخ:

	1.	Messer - سكين
	2.	Gabel - شوكة
	3.	Löffel - ملعقة
	4.	Schneidebrett - لوح التقطيع
	5.	Mixer - خلاط
	6.	Rührschüssel - وعاء للخلط
	7.	Backblech - صينية الخبز
	8.	Backform - قالب للخبز
	9.	Sieb - مصفاة
	10.	Kochlöffel - ملعقة خشبية

المصطلحات الأخرى المتعلقة بالطبخ:

	1.	Scharf - حار
	2.	Süß - حلو
	3.	Bitter - مر
	4.	Sauermilch - حليب حمضي
	5.	Kalt - بارد
	6.	Warm - دافئ
	7.	Heiß - حار
	8.	Lecker - لذيذ
	9.	Frisch - طازج
	10.	Fertig - جاهز

أمثلة على جمل في الطبخ:

	1.	Ich koche heute Abend Spaghetti. - سأطبخ المعكرونة الليلة.
	2.	Kannst du die Zwiebeln schneiden? - هل يمكنك تقطيع البصل؟
	3.	Die Suppe muss noch etwas kochen. - يجب أن تغلي الشوربة لبعض الوقت.
	4.	Ich habe die Kartoffeln im Ofen gebacken. - خبزت البطاطس في الفرن.
	5.	Füge etwas Salz hinzu. - أضف بعض الملح.
	6.	Der Kuchen muss eine Stunde backen. - يجب أن يُخبز الكعك لمدة ساعة.
	7.	Das Gericht schmeckt sehr lecker! - الطبق لذيذ جدًا!

مع هذه الكلمات والمصطلحات، ستكون قادرًا على التحدث بشكل أفضل عن الطهي ووصف الأطعمة والمكونات في اللغة الألمانية!`
													},verb: {
														title: ' اهم 200 في اللغة الألمانية ',
														description:'            ',
													
													   
														code:`إليك قائمة بـ أهم 200 فعل في اللغة الألمانية مع ترجمتها إلى العربية. هذه الأفعال تُعتبر من الأفعال الأساسية التي ستحتاجها في محادثاتك اليومية وفي تعلم اللغة الألمانية بشكل عام.
	1.	sein - يكون
	2.	haben - يمتلك
	3.	werden - يصبح
	4.	können - يستطيع
	5.	müssen - يجب
	6.	sollen - ينبغي
	7.	wollen - يريد
	8.	dürfen - يجوز
	9.	mögen - يحب
	10.	machen - يفعل
	11.	geben - يعطي
	12.	nehmen - يأخذ
	13.	sehen - يرى
	14.	hören - يسمع
	15.	essen - يأكل
	16.	trinken - يشرب
	17.	gehen - يذهب
	18.	fahren - يسافر / يقود
	19.	kommen - يأتي
	20.	laufen - يركض
	21.	arbeiten - يعمل
	22.	lernen - يتعلم
	23.	spielen - يلعب
	24.	lesen - يقرأ
	25.	schreiben - يكتب
	26.	sprechen - يتكلم
	27.	denken - يفكر
	28.	vergessen - ينسى
	29.	erinnern - يتذكر
	30.	finden - يجد
	31.	bleiben - يبقى
	32.	sehen - يشاهد
	33.	brauchen - يحتاج
	34.	vergleichen - يقارن
	35.	beginnen - يبدأ
	36.	endeten - ينتهي
	37.	verstehen - يفهم
	38.	glauben - يعتقد
	39.	warten - ينتظر
	40.	heißen - يسمى
	41.	tragen - يحمل
	42.	erzählen - يروي
	43.	fragen - يسأل
	44.	antworten - يجيب
	45.	lachen - يضحك
	46.	weinen - يبكي
	47.	fühlen - يشعر
	48.	leiden - يعاني
	49.	laufen - يمشي
	50.	arbeiten - يعمل
	51.	essen - يأكل
	52.	trinken - يشرب
	53.	putzen - ينظف
	54.	kochen - يطبخ
	55.	vergleichen - يقارن
	56.	bestellen - يطلب (شيئًا)
	57.	zahlen - يدفع (مال)
	58.	anrufen - يتصل
	59.	schlafen - ينام
	60.	aufstehen - ينهض
	61.	aussehen - يبدو
	62.	freuen - يفرح
	63.	lieben - يحب
	64.	kennen - يعرف
	65.	versuchen - يحاول
	66.	überlegen - يفكر
	67.	besuchen - يزور
	68.	bieten - يقدم
	69.	erklären - يشرح
	70.	diskutieren - يناقش
	71.	fühlen - يشعر
	72.	steigen - يرتفع
	73.	verlassen - يترك
	74.	ändern - يغير
	75.	zeigen - يظهر
	76.	messen - يقيس
	77.	hassen - يكره
	78.	retten - ينقذ
	79.	erreichen - يصل إلى
	80.	suchen - يبحث
	81.	finden - يجد
	82.	fragen - يسأل
	83.	antworten - يجيب
	84.	sagen - يقول
	85.	denken - يعتقد
	86.	glauben - يعتقد
	87.	zuhören - يستمع
	88.	vorbereiten - يجهز
	89.	tragen - يحمل
	90.	schenken - يهدي
	91.	feststellen - يحدد
	92.	brennen - يحترق
	93.	wachsen - ينمو
	94.	vertragen - يتحمل
	95.	anbieten - يعرض
	96.	helfen - يساعد
	97.	reisen - يسافر
	98.	verstehen - يفهم
	99.	erzählen - يحكي
	100.	studieren - يدرس
	101.	fressen - يأكل (للحيوانات)
	102.	ziehen - يسحب
	103.	schneiden - يقطع
	104.	werfen - يرمي
	105.	verlassen - يغادر
	106.	gewinnen - يفوز
	107.	verlieren - يخسر
	108.	fliegen - يطير
	109.	singen - يغني
	110.	tanzen - يرقص
	111.	kochen - يطبخ
	112.	braten - يقلي
	113.	backen - يخبز
	114.	nehmen - يأخذ
	115.	holen - يحضر
	116.	verstehen - يفهم
	117.	überleben - ينجو
	118.	hinzufügen - يضيف
	119.	verbieten - يمنع
	120.	erlauben - يسمح
	121.	sich erinnern - يتذكر
	122.	sich kümmern - يهتم
	123.	grüßen - يحيي
	124.	leihen - يعير
	125.	mieten - يستأجر
	126.	bieten - يقدم
	127.	auswählen - يختار
	128.	untersuchen - يفحص
	129.	finden - يجد
	130.	verstehen - يفهم
	131.	arbeiten - يعمل
	132.	antworten - يجيب
	133.	zusehen - يشاهد
	134.	erklären - يشرح
	135.	bestimmen - يحدد
	136.	anrufen - يتصل
	137.	annehmen - يقبل
	138.	abnehmen - يقلل
	139.	aufhören - يتوقف
	140.	weitergehen - يستمر
	141.	bemerken - يلاحظ
	142.	tragen - يحمل
	143.	verändern - يغير
	144.	entscheiden - يقرر
	145.	vergleichen - يقارن
	146.	überlegen - يفكر
	147.	durchführen - ينفذ
	148.	hören - يسمع
	149.	sehen - يرى
	150.	betrachten - ينظر
	151.	erkennen - يتعرف
	152.	verfolgen - يتبع
	153.	ausdrucken - يطبع
	154.	zusammenarbeiten - يتعاون
	155.	aufwachen - يستيقظ
	156.	abholen - يلتقط
	157.	eintreten - يدخل
	158.	aussteigen - ينزل
	159.	einsteigen - يركب
	160.	auswählen - يختار
	161.	zusammenfassen - يلخص
	162.	stellen - يضع
	163.	versuchen - يحاول
	164.	weiterhelfen - يساعد في الاستمرار
	165.	aufwenden - ينفق
	166.	weglaufen - يهرب
	167.	ankommen - يصل
	168.	abfahren - يغادر
	169.	verpacken - يعبئ
	170.	anbieten - يعرض
	171.	festhalten - يمسك
	172.	aufräumen - ينظم
	173.	aussehen - يبدو
	174.	zunehmen - يزداد
	175.	abnehmen - يقل
	176.	vermeiden - يتجنب
	177.	entwickeln - يطور
	178.	auslösen - يسبب
	179.	empfehlen - يوصي
	180.	annehmen - يقبل
	181.	warten - ينتظر
	182.	verfolgen - يتابع
	183.	gestalten - يصمم
	184.	ausruhen - يرتاح
	185.	auffallen - يلفت الانتباه
	186.	ausgehen - يخرج
	187.	abreißen - يزيل
	188.	verbessern - يحسن
	189.	zählen - يعد
	190.	verhindern - يمنع
	191.	beenden - ينهي
	192.	verhandeln - يتفاوض
	193.	verfügen - يتوفر
	194.	verstehen - يفهم
	195.	teilen - يشارك
	196.	übertreiben - يبالغ
	197.	sich verabschieden - يودع
	198.	sich freuen - يفرح
`
														},
};