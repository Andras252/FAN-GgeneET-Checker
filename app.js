// ========================================
// 2026/04/05　一機見失って559機登録。
// ========================================
const items = [// 機体はの下に置く！！！


{ id: "GAT-X252", name: "フォビドゥンガンダム", group: "機動戦士ガンダムSEED", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "GAT-X370", name: "レイダーガンダム", group: "機動戦士ガンダムSEED", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "GAT-X131", name: "カラミティガンダム", group: "機動戦士ガンダムSEED", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "RX-78-2", name: "ガンダム", group: "機動戦士ガンダム", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "Unit-0005", name: "ガンキャノン", group: "機動戦士ガンダム", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "Unit-0006", name: "ガンタンク", group: "機動戦士ガンダム", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "Unit-0007", name: "コア・ファイター", group: "機動戦士ガンダム", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "Unit-0008", name: "コア・ブースター", group: "機動戦士ガンダム", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "Unit-0009", name: "ジム", group: "機動戦士ガンダム", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "Unit-0010", name: "ボール", group: "機動戦士ガンダム", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "Unit-0011", name: "61式戦車", group: "機動戦士ガンダム", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "Unit-0012", name: "ザクⅠ", group: "機動戦士ガンダム", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "Unit-0013", name: "ザクⅡ", group: "機動戦士ガンダム", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "Unit-0014", name: "グフ", group: "機動戦士ガンダム", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "Unit-0015", name: "ドム", group: "機動戦士ガンダム", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "Unit-0016", name: "リック・ドム", group: "機動戦士ガンダム", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "Unit-0017", name: "ゲルググ", group: "機動戦士ガンダム", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "Unit-0018", name: "ギャン", group: "機動戦士ガンダム", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "Unit-0019", name: "ゴッグ", group: "機動戦士ガンダム", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "Unit-0020", name: "アッガイ", group: "機動戦士ガンダム", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "Unit-0021", name: "ズゴック", group: "機動戦士ガンダム", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "Unit-0022", name: "ゾック", group: "機動戦士ガンダム", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "Unit-0023", name: "アッザム", group: "機動戦士ガンダム", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "Unit-0024", name: "ザクレロ", group: "機動戦士ガンダム", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "Unit-0025", name: "ビグロ", group: "機動戦士ガンダム", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "Unit-0026", name: "ビグ・ザム", group: "機動戦士ガンダム", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "Unit-0027", name: "ブラウ・ブロ", group: "機動戦士ガンダム", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "Unit-0028", name: "エルメス", group: "機動戦士ガンダム", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "Unit-0029", name: "ジオング", group: "機動戦士ガンダム", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "Unit-0030", name: "マゼラ・アタック", group: "機動戦士ガンダム", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "Unit-0031", name: "ドップ", group: "機動戦士ガンダム", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "Unit-0032", name: "ガトル", group: "機動戦士ガンダム", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "Unit-0033", name: "プロトタイプガンダム", group: "機動戦士ガンダム", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "Unit-0034", name: "G-3ガンダム", group: "機動戦士ガンダム", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "Unit-0035", name: "アッグガイ", group: "機動戦士ガンダム", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "Unit-0036", name: "ギガン", group: "機動戦士ガンダム", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "Unit-0037", name: "ガッシャ", group: "機動戦士ガンダム", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "Unit-0038", name: "陸戦高機動型ザク", group: "機動戦士ガンダム", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "Unit-0039", name: "ギャン・エーオース", group: "機動戦士ガンダム", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "Unit-0040", name: "ルナタンク", group: "機動戦士ガンダム", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "Unit-0041", name: "ブラレロ", group: "機動戦士ガンダム", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "Unit-0042", name: "ビグ・ルフ", group: "機動戦士ガンダム", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "Unit-0043", name: "ビグロマイヤー", group: "機動戦士ガンダム", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "Unit-0044", name: "キャスバル専用ガンダム", group: "機動戦士ガンダム", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "Unit-0045", name: "量産型ビグ・ザム", group: "機動戦士ガンダム", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "Unit-0046", name: "Zガンダム", group: "機動戦士Zガンダム", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "Unit-0047", name: "百式", group: "機動戦士Zガンダム", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "Unit-0048", name: "メタス", group: "機動戦士Zガンダム", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "Unit-0049", name: "ガンダムMk-Ⅱ(エゥーゴ仕様)", group: "機動戦士Zガンダム", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "Unit-0050", name: "ガンダムMk-Ⅱ(ティターンズ仕様)", group: "機動戦士Zガンダム", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "Unit-0051", name: "ガンダムMk-Ⅱ＆フライングアーマー", group: "機動戦士Zガンダム", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "Unit-0052", name: "スーパーガンダム", group: "機動戦士Zガンダム", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "Unit-0053", name: "Ｇディフェンサー", group: "機動戦士Zガンダム", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "Unit-0054", name: "リック・ディアス(レッドカラー)", group: "機動戦士Zガンダム", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "Unit-0055", name: "リック・ディアス", group: "機動戦士Zガンダム", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "Unit-0056", name: "ディジェ", group: "機動戦士Zガンダム", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "Unit-0057", name: "ネモ", group: "機動戦士Zガンダム", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "Unit-0058", name: "ジムⅡ(エゥーゴカラー)", group: "機動戦士Zガンダム", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "Unit-0059", name: "ジムⅡ(連邦軍仕様)", group: "機動戦士Zガンダム", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "Unit-0060", name: "ハイザック(ティターンズ仕様)", group: "機動戦士Zガンダム", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "Unit-0061", name: "ハイザック・カスタム", group: "機動戦士Zガンダム", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "Unit-0062", name: "マラサイ", group: "機動戦士Zガンダム", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "Unit-0063", name: "バーザム", group: "機動戦士Zガンダム", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "Unit-0064", name: "ハンブラビ", group: "機動戦士Zガンダム", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "Unit-0065", name: "ガブスレイ", group: "機動戦士Zガンダム", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "Unit-0066", name: "バイアラン", group: "機動戦士Zガンダム", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "Unit-0067", name: "バウンド・ドック", group: "機動戦士Zガンダム", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "Unit-0068", name: "メッサーラ", group: "機動戦士Zガンダム", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "Unit-0069", name: "ボリノーク・サマーン", group: "機動戦士Zガンダム", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "Unit-0070", name: "パラス・アテネ", group: "機動戦士Zガンダム", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "Unit-0071", name: "ジ・Ｏ", group: "機動戦士Zガンダム", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "Unit-0072", name: "ガルバルディβ", group: "機動戦士Zガンダム", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "Unit-0073", name: "アッシマー", group: "機動戦士Zガンダム", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "Unit-0074", name: "ギャプラン", group: "機動戦士Zガンダム", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "Unit-0075", name: "サイコ・ガンダム", group: "機動戦士Zガンダム", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "Unit-0076", name: "ガザC", group: "機動戦士Zガンダム", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "Unit-0077", name: "キュベレイ", group: "機動戦士Zガンダム", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "Unit-0078", name: "ZⅡ", group: "機動戦士Zガンダム", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "Unit-0079", name: "百式改", group: "機動戦士ガンダムZZ", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "Unit-0080", name: "ネモⅢ", group: "機動戦士ガンダムZZ", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "Unit-0081", name: "Zガンダム3号機P2型", group: "機動戦士Zガンダム", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "Unit-0082", name: "プロトタイプ・キュベレイ", group: "機動戦士Zガンダム", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "Unit-0083", name: "ZZガンダム", group: "機動戦士ガンダムZZ", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "Unit-0084", name: "フルアーマーZZガンダム", group: "機動戦士ガンダムZZ", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "Unit-0085", name: "強化型ZZガンダム", group: "機動戦士ガンダムZZ", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "Unit-0086", name: "メガライダー", group: "機動戦士ガンダムZZ", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "Unit-0087", name: "ジムⅢ", group: "機動戦士ガンダムZZ", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "Unit-0088", name: "ガザＤ", group: "機動戦士ガンダムZZ", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "Unit-0089", name: "ガ・ゾウム", group: "機動戦士ガンダムZZ", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "Unit-0090", name: "ガルスＪ", group: "機動戦士ガンダムZZ", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "Unit-0091", name: "ズサ", group: "機動戦士ガンダムZZ", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "Unit-0092", name: "ハンマ・ハンマ", group: "機動戦士ガンダムZZ", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "Unit-0093", name: "Ｒ・ジャジャ", group: "機動戦士ガンダムZZ", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "Unit-0094", name: "バウ", group: "機動戦士ガンダムZZ", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "Unit-0095", name: "ドライセン", group: "機動戦士ガンダムZZ", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "Unit-0096", name: "シュツルム・ディアス", group: "機動戦士ガンダムZZ", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "Unit-0097", name: "ザクⅢ", group: "機動戦士ガンダムZZ", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "Unit-0098", name: "ザクⅢ改", group: "機動戦士ガンダムZZ", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "Unit-0099", name: "リゲルグ", group: "機動戦士ガンダムZZ", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "Unit-0100", name: "ジャムル・フィン", group: "機動戦士ガンダムZZ", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "Unit-0101", name: "ガズアル", group: "機動戦士ガンダムZZ", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "Unit-0102", name: "ガズエル", group: "機動戦士ガンダムZZ", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "Unit-0103", name: "ゲーマルク", group: "機動戦士ガンダムZZ", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "Unit-0104", name: "キュベレイ(ZZ版)", group: "機動戦士ガンダムZZ", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "Unit-0105", name: "キュベレイMk-Ⅱ(エルピー・プル専用機)", group: "機動戦士ガンダムZZ", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "Unit-0106", name: "キュベレイMk-Ⅱ(プルツー専用機)", group: "機動戦士ガンダムZZ", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "Unit-0107", name: "量産型キュベレイ", group: "機動戦士ガンダムZZ", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "Unit-0108", name: "ドーベン・ウルフ", group: "機動戦士ガンダムZZ", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "Unit-0109", name: "サイコ・ガンダムMk-Ⅱ", group: "機動戦士ガンダムZZ", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "Unit-0110", name: "クィン・マンサ", group: "機動戦士ガンダムZZ", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "Unit-0111", name: "ドワッジ", group: "機動戦士ガンダムZZ", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "Unit-0112", name: "ドワッジ改", group: "機動戦士ガンダムZZ", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "Unit-0113", name: "カプール", group: "機動戦士ガンダムZZ", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "Unit-0114", name: "サイコ・ガンダムMk-Ⅲ", group: "機動戦士ガンダムZZ", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "Unit-0115", name: "νガンダム", group: "機動戦士ガンダム 逆襲のシャア", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "Unit-0116", name: "サザビー", group: "機動戦士ガンダム 逆襲のシャア", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "Unit-0117", name: "リ・ガズィ", group: "機動戦士ガンダム 逆襲のシャア", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "Unit-0118", name: "リ・ガズィ（バック・ウエポン・システム装備型）", group: "機動戦士ガンダム 逆襲のシャア", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "Unit-0119", name: "ジェガン", group: "機動戦士ガンダム 逆襲のシャア", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "Unit-0120", name: "ヤクト・ドーガ(ギュネイ・ガス専用機)", group: "機動戦士ガンダム 逆襲のシャア", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "Unit-0121", name: "ヤクト・ドーガ(クェス・エア専用機)", group: "機動戦士ガンダム 逆襲のシャア", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "Unit-0122", name: "α・アジール", group: "機動戦士ガンダム 逆襲のシャア", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "Unit-0123", name: "ギラ・ドーガ", group: "機動戦士ガンダム 逆襲のシャア", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "Unit-0124", name: "Hi-νガンダム", group: "機動戦士ガンダム 逆襲のシャア", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "Unit-0125", name: "ナイチンゲール", group: "機動戦士ガンダム 逆襲のシャア", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "Unit-0126", name: "リ・ガズィ・カスタム", group: "機動戦士ガンダム 逆襲のシャア", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "Unit-0127", name: "ギラ・ドーガ改", group: "機動戦士ガンダム 逆襲のシャア", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "Unit-0128", name: "ギラ・ドーガ(サイコミュ試験型)", group: "機動戦士ガンダム 逆襲のシャア", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "Unit-0129", name: "サイコ・ドーガ", group: "機動戦士ガンダム 逆襲のシャア", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "Unit-0130", name: "β・アジール", group: "機動戦士ガンダム 逆襲のシャア", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "Unit-0131", name: "量産型νガンダム(インコム装備)", group: "機動戦士ガンダム 逆襲のシャア", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "Unit-0132", name: "量産型νガンダム(フィン・ファンネル装備)", group: "機動戦士ガンダム 逆襲のシャア", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "Unit-0133", name: "ユニコーンガンダム(デストロイモード)", group: "機動戦士ガンダムUC", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "Unit-0134", name: "バンシィ・ノルン(デストロイモード)", group: "機動戦士ガンダムUC", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "Unit-0135", name: "ユニコーンガンダム(ユニコーンモード)", group: "機動戦士ガンダムUC", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "Unit-0136", name: "フルアーマー・ユニコーンガンダム(ユニコーンモード)", group: "機動戦士ガンダムUC", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "Unit-0137", name: "フルアーマー・ユニコーンガンダム(デストロイモード)", group: "機動戦士ガンダムUC", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "Unit-0138", name: "バンシィ(ユニコーンモード)", group: "機動戦士ガンダムUC", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "Unit-0139", name: "バンシィ(デストロイモード)", group: "機動戦士ガンダムUC", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "Unit-0140", name: "バンシィ・ノルン(ユニコーンモード)", group: "機動戦士ガンダムUC", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "Unit-0141", name: "リゼル", group: "機動戦士ガンダムUC", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "Unit-0142", name: "デルタプラス", group: "機動戦士ガンダムUC", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "Unit-0143", name: "ジェガンD型", group: "機動戦士ガンダムUC", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "Unit-0144", name: "プロト・スタークジェガン", group: "機動戦士ガンダムUC", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "Unit-0145", name: "スタークジェガン", group: "機動戦士ガンダムUC", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "Unit-0146", name: "ジェスタ", group: "機動戦士ガンダムUC", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "Unit-0147", name: "ジェスタ・キャノン", group: "機動戦士ガンダムUC", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "Unit-0148", name: "ジムⅡ・セミストライカー", group: "機動戦士ガンダムUC", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "Unit-0149", name: "ガンキャノン・ディテクター", group: "機動戦士ガンダムUC", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "Unit-0150", name: "バイアラン・カスタム", group: "機動戦士ガンダムUC", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "Unit-0151", name: "アンクシャ", group: "機動戦士ガンダムUC", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "Unit-0152", name: "ロト", group: "機動戦士ガンダムUC", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "Unit-0153", name: "シルヴァ・バレト", group: "機動戦士ガンダムUC", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "Unit-0154", name: "ギラ・ドーガ(袖付き)", group: "機動戦士ガンダムUC", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "Unit-0155", name: "ギラ・ドーガ(重武装仕様/袖付き)", group: "機動戦士ガンダムUC", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "Unit-0156", name: "ギラ・ズール", group: "機動戦士ガンダムUC", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "Unit-0157", name: "ゼー・ズール", group: "機動戦士ガンダムUC", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "Unit-0158", name: "ローゼン・ズール", group: "機動戦士ガンダムUC", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "Unit-0159", name: "クシャトリヤ", group: "機動戦士ガンダムUC", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "Unit-0160", name: "クシャトリヤ・リペアード", group: "機動戦士ガンダムUC", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "Unit-0161", name: "シナンジュ", group: "機動戦士ガンダムUC", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "Unit-0162", name: "ネオ・ジオング", group: "機動戦士ガンダムUC", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "Unit-0163", name: "シュツルム・ガルス", group: "機動戦士ガンダムUC", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "Unit-0164", name: "ガルスＫ", group: "機動戦士ガンダムUC", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "Unit-0165", name: "シャンブロ", group: "機動戦士ガンダムUC", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "Unit-0166", name: "ザクⅠ・スナイパータイプ", group: "機動戦士ガンダムUC", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "Unit-0167", name: "イフリート・シュナイド", group: "機動戦士ガンダムUC", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "Unit-0168", name: "ジュアッグ(ジオン残党軍)", group: "機動戦士ガンダムUC", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "Unit-0169", name: "ゾゴック(ジオン残党軍)", group: "機動戦士ガンダムUC", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "Unit-0170", name: "リゼルC型(ディフェンサーaユニット)", group: "機動戦士ガンダムUC", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "Unit-0171", name: "リゼルC型(ディフェンサーbユニット)", group: "機動戦士ガンダムUC", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "Unit-0172", name: "デルタガンダム", group: "機動戦士ガンダムUC", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "Unit-0173", name: "シルヴァ・バレト(ファンネル試験型)", group: "機動戦士ガンダムUC", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "Unit-0174", name: "クラーケ・ズール", group: "機動戦士ガンダムUC", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "Unit-0175", name: "Ξガンダム", group: "機動戦士ガンダム 閃光のハサウェイ", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "Unit-0176", name: "メッサーF型ネイキッド", group: "機動戦士ガンダム 閃光のハサウェイ", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "Unit-0177", name: "メッサーF01型", group: "機動戦士ガンダム 閃光のハサウェイ", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "Unit-0178", name: "メッサーF02型(マインレイヤー装備)", group: "機動戦士ガンダム 閃光のハサウェイ", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "Unit-0179", name: "ペーネロペー", group: "機動戦士ガンダム 閃光のハサウェイ", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "Unit-0180", name: "グスタフ・カール00型", group: "機動戦士ガンダム 閃光のハサウェイ", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "Unit-0181", name: "シャイニングガンダム", group: "機動武闘伝 Gガンダム", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "Unit-0182", name: "ガンダムマックスター", group: "機動武闘伝 Gガンダム", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "Unit-0183", name: "ガンダムローズ", group: "機動武闘伝 Gガンダム", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "Unit-0184", name: "ドラゴンガンダム", group: "機動武闘伝 Gガンダム", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "Unit-0185", name: "ボルトガンダム", group: "機動武闘伝 Gガンダム", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "Unit-0186", name: "ガンダムシュピーゲル", group: "機動武闘伝 Gガンダム", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "Unit-0187", name: "クーロンガンダム", group: "機動武闘伝 Gガンダム", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "Unit-0188", name: "ネロスガンダム", group: "機動武闘伝 Gガンダム", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "Unit-0189", name: "ジョンブルガンダム", group: "機動武闘伝 Gガンダム", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "Unit-0190", name: "ネーデルガンダム", group: "機動武闘伝 Gガンダム", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "Unit-0191", name: "マンダラガンダム", group: "機動武闘伝 Gガンダム", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "Unit-0192", name: "ランバーガンダム", group: "機動武闘伝 Gガンダム", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "Unit-0193", name: "マーメイドガンダム", group: "機動武闘伝 Gガンダム", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "Unit-0194", name: "ノブッシ", group: "機動武闘伝 Gガンダム", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "Unit-0195", name: "カッシング", group: "機動武闘伝 Gガンダム", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "Unit-0196", name: "シャッフル・ハート", group: "機動武闘伝 Gガンダム", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "Unit-0197", name: "シャッフル・スペード", group: "機動武闘伝 Gガンダム", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "Unit-0198", name: "シャッフル・クラブ", group: "機動武闘伝 Gガンダム", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "Unit-0199", name: "シャッフル・ダイヤ", group: "機動武闘伝 Gガンダム", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "Unit-0200", name: "シャッフル・ジョーカー", group: "機動武闘伝 Gガンダム", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "Unit-0201", name: "マスターガンダム", group: "機動武闘伝 Gガンダム", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "Unit-0202", name: "デビルガンダム(第一形態)", group: "機動武闘伝 Gガンダム", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "Unit-0203", name: "デスアーミー", group: "機動武闘伝 Gガンダム", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "Unit-0204", name: "デスバーディ", group: "機動武闘伝 Gガンダム", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "Unit-0205", name: "デスビースト", group: "機動武闘伝 Gガンダム", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "Unit-0206", name: "ゴッドガンダム", group: "機動武闘伝 Gガンダム", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "Unit-0207", name: "ライジングガンダム", group: "機動武闘伝 Gガンダム", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "Unit-0208", name: "ノーベルガンダム", group: "機動武闘伝 Gガンダム", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "Unit-0209", name: "ガンダムヘブンズソード", group: "機動武闘伝 Gガンダム", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "Unit-0210", name: "グランドガンダム", group: "機動武闘伝 Gガンダム", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "Unit-0211", name: "ウォルターガンダム", group: "機動武闘伝 Gガンダム", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "Unit-0212", name: "グランドマスターガンダム", group: "機動武闘伝 Gガンダム", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "Unit-0213", name: "デビルガンダム(最終形態)", group: "機動武闘伝 Gガンダム", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "Unit-0214", name: "ウイングガンダム", group: "新機動戦記 ガンダムW", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "Unit-0215", name: "ウイングガンダムゼロ", group: "新機動戦記 ガンダムW", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "Unit-0216", name: "ガンダムデスサイズ", group: "新機動戦記 ガンダムW", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "Unit-0217", name: "ガンダムデスサイズヘル", group: "新機動戦記 ガンダムW", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "Unit-0218", name: "ガンダムヘビーアームズ", group: "新機動戦記 ガンダムW", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "Unit-0219", name: "ガンダムヘビーアームズ改", group: "新機動戦記 ガンダムW", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "Unit-0220", name: "ガンダムサンドロック", group: "新機動戦記 ガンダムW", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "Unit-0221", name: "ガンダムサンドロック改", group: "新機動戦記 ガンダムW", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "Unit-0222", name: "シェンロンガンダム", group: "新機動戦記 ガンダムW", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "Unit-0223", name: "アルトロンガンダム", group: "新機動戦記 ガンダムW", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "Unit-0224", name: "マグナアック", group: "新機動戦記 ガンダムW", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "Unit-0225", name: "トールギス", group: "新機動戦記 ガンダムW", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "Unit-0226", name: "トールギスⅡ", group: "新機動戦記 ガンダムW", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "Unit-0227", name: "リーオー", group: "新機動戦記 ガンダムW", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "Unit-0228", name: "リーオー(肩部キャノン砲装備)", group: "新機動戦記 ガンダムW", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "Unit-0229", name: "エアリーズ", group: "新機動戦記 ガンダムW", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "Unit-0230", name: "エアリーズ(OZ仕様)", group: "新機動戦記 ガンダムW", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "Unit-0231", name: "トーラス", group: "新機動戦記 ガンダムW", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "Unit-0232", name: "トーラス(サンクキングダム仕様)", group: "新機動戦記 ガンダムW", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "Unit-0233", name: "ヴァイエイト", group: "新機動戦記 ガンダムW", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "Unit-0234", name: "メリクリウス", group: "新機動戦記 ガンダムW", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "Unit-0235", name: "ビルゴ", group: "新機動戦記 ガンダムW", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "Unit-0236", name: "ビルゴⅡ", group: "新機動戦記 ガンダムW", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "Unit-0237", name: "ガンダムエピオン", group: "新機動戦記 ガンダムW", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "Unit-0238", name: "ウイングガンダム(EW版)", group: "新機動戦記 ガンダムW Endless Waltz", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "Unit-0239", name: "ウイングガンダム プロトゼロ(EW版)", group: "新機動戦記 ガンダムW Endless Waltz", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "Unit-0240", name: "ガンダムデスサイズ(EW版/ルーセット装備)", group: "新機動戦記 ガンダムW Endless Waltz", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "Unit-0241", name: "ガンダムヘビーアームズ(EW版/イーゲル装備)", group: "新機動戦記 ガンダムW Endless Waltz", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "Unit-0242", name: "ガンダムサンドロック(EW版/アーマディロ装備)", group: "新機動戦記 ガンダムW Endless Waltz", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "Unit-0243", name: "シェンロンガンダム(EW版/獠牙装備)", group: "新機動戦記 ガンダムW Endless Waltz", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "Unit-0244", name: "トールギスF", group: "新機動戦記 ガンダムW Endless Waltz", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "Unit-0245", name: "ウイングガンダムゼロ(EW版)", group: "新機動戦記 ガンダムW Endless Waltz", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "Unit-0246", name: "ガンダムデスサイズヘル(EW版)", group: "新機動戦記 ガンダムW Endless Waltz", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "Unit-0247", name: "ガンダムヘビーアームズ改(EW版)", group: "新機動戦記 ガンダムW Endless Waltz", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "Unit-0248", name: "ガンダムサンドロック改(EW版)", group: "新機動戦記 ガンダムW Endless Waltz", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "Unit-0249", name: "アルトロンガンダム(EW版)", group: "新機動戦記 ガンダムW Endless Waltz", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "Unit-0250", name: "トールギスⅢ", group: "新機動戦記 ガンダムW Endless Waltz", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "Unit-0251", name: "サーペント", group: "新機動戦記 ガンダムW Endless Waltz", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "Unit-0252", name: "ガンダムX", group: "機動新世紀 ガンダムX", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "Unit-0253", name: "ガンダムXディバイダー", group: "機動新世紀 ガンダムX", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "Unit-0254", name: "ガンダムエアマスター", group: "機動新世紀 ガンダムX", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "Unit-0255", name: "ガンダムレオパルド", group: "機動新世紀 ガンダムX", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "Unit-0256", name: "ベルティゴ", group: "機動新世紀 ガンダムX", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "Unit-0257", name: "ガンダムヴァサーゴ", group: "機動新世紀 ガンダムX", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "Unit-0258", name: "ガンダムアシュタロン", group: "機動新世紀 ガンダムX", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "Unit-0259", name: "Ｇビット(D.O.M.E.)", group: "機動新世紀 ガンダムX", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "Unit-0260", name: "ＧＸビット", group: "機動新世紀 ガンダムX", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "Unit-0261", name: "コルレル", group: "機動新世紀 ガンダムX", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "Unit-0262", name: "ブリトヴァ", group: "機動新世紀 ガンダムX", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "Unit-0263", name: "ガブル", group: "機動新世紀 ガンダムX", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "Unit-0264", name: "ラスヴェート", group: "機動新世紀 ガンダムX", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "Unit-0265", name: "ドートレス", group: "機動新世紀 ガンダムX", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "Unit-0266", name: "ドートレス・ウエポン", group: "機動新世紀 ガンダムX", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "Unit-0267", name: "ワイズワラビー", group: "機動新世紀 ガンダムX", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "Unit-0268", name: "ファイヤーワラビー", group: "機動新世紀 ガンダムX", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "Unit-0269", name: "バリエント", group: "機動新世紀 ガンダムX", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "Unit-0270", name: "ガディール", group: "機動新世紀 ガンダムX", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "Unit-0271", name: "ジェニス", group: "機動新世紀 ガンダムX", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "Unit-0272", name: "スラッシュバッファロー", group: "機動新世紀 ガンダムX", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "Unit-0273", name: "セプテム", group: "機動新世紀 ガンダムX", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "Unit-0274", name: "オクト・エイプ", group: "機動新世紀 ガンダムX", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "Unit-0275", name: "グランディーネ", group: "機動新世紀 ガンダムX", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "Unit-0276", name: "フェブラル", group: "機動新世紀 ガンダムX", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "Unit-0277", name: "パトゥーリア", group: "機動新世紀 ガンダムX", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "Unit-0278", name: "エスタルドス", group: "機動新世紀 ガンダムX", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "Unit-0279", name: "エスペランサ", group: "機動新世紀 ガンダムX", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "Unit-0280", name: "ガンダムDX", group: "機動新世紀 ガンダムX", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "Unit-0281", name: "ガンダムエアマスターバースト", group: "機動新世紀 ガンダムX", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "Unit-0282", name: "ガンダムレオパルドデストロイ", group: "機動新世紀 ガンダムX", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "Unit-0283", name: "Ｇファルコン", group: "機動新世紀 ガンダムX", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "Unit-0284", name: "ＧファルコンＤＸ", group: "機動新世紀 ガンダムX", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "Unit-0285", name: "ガンダムヴァサーゴチェストブレイク", group: "機動新世紀 ガンダムX", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "Unit-0286", name: "ガンダムアシュタロンハーミットクラブ", group: "機動新世紀 ガンダムX", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "Unit-0287", name: "ドートレス・ネオ", group: "機動新世紀 ガンダムX", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "Unit-0288", name: "ドートレス・フライヤー", group: "機動新世紀 ガンダムX", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "Unit-0289", name: "ドーシート", group: "機動新世紀 ガンダムX", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "Unit-0290", name: "ドーシートⅢ", group: "機動新世紀 ガンダムX", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "Unit-0291", name: "クラウダ", group: "機動新世紀 ガンダムX", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "Unit-0292", name: "ストライクガンダム", group: "機動戦士ガンダムSEED", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "Unit-0293", name: "エールストライクガンダム", group: "機動戦士ガンダムSEED", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "Unit-0294", name: "ソードストライクガンダム", group: "機動戦士ガンダムSEED", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "Unit-0295", name: "ランチャーストライクガンダム", group: "機動戦士ガンダムSEED", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "Unit-0296", name: "パーフェクトストライクガンダム", group: "機動戦士ガンダムSEED", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "Unit-0297", name: "ヂュエルガンダム", group: "機動戦士ガンダムSEED", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "Unit-0298", name: "ヂュエルガンダム アサルトシュラウド", group: "機動戦士ガンダムSEED", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "Unit-0299", name: "バスターガンダム", group: "機動戦士ガンダムSEED", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "Unit-0300", name: "ブリッツガンダム", group: "機動戦士ガンダムSEED", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "Unit-0301", name: "イージスガンダム", group: "機動戦士ガンダムSEED", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "Unit-0302", name: "ストライクダガー", group: "機動戦士ガンダムSEED", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "Unit-0303", name: "メビウスゼロ", group: "機動戦士ガンダムSEED", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "Unit-0304", name: "メビウス(リニアガン装備)", group: "機動戦士ガンダムSEED", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "Unit-0305", name: "メビウス(核ミサイル装備)", group: "機動戦士ガンダムSEED", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "Unit-0306", name: "スカイグラスパー", group: "機動戦士ガンダムSEED", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "Unit-0307", name: "スカイグラスパー(エールストライカー装備)", group: "機動戦士ガンダムSEED", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "Unit-0308", name: "スカイグラスパー(ソードストライカー装備)", group: "機動戦士ガンダムSEED", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "Unit-0309", name: "スカイグラスパー(ランチャーストライカー装備)", group: "機動戦士ガンダムSEED", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "Unit-0310", name: "スピアヘッド", group: "機動戦士ガンダムSEED", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "Unit-0311", name: "ジン", group: "機動戦士ガンダムSEED", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "Unit-0312", name: "ジン(M69バルルス改・特火重粒子砲装備)", group: "機動戦士ガンダムSEED", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "Unit-0313", name: "ジン(D装備)", group: "機動戦士ガンダムSEED", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "Unit-0314", name: "長距離強行偵察複座型ジン", group: "機動戦士ガンダムSEED", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "Unit-0315", name: "シグー", group: "機動戦士ガンダムSEED", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "Unit-0316", name: "ゲイツ", group: "機動戦士ガンダムSEED", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "Unit-0317", name: "ディン", group: "機動戦士ガンダムSEED", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "Unit-0318", name: "バクゥ(450mm2連装レールガン装備)", group: "機動戦士ガンダムSEED", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "Unit-0319", name: "バクゥ(400mm径13連装ミサイルポッド装備)", group: "機動戦士ガンダムSEED", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "Unit-0320", name: "ラゴゥ", group: "機動戦士ガンダムSEED", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "Unit-0321", name: "ザウート", group: "機動戦士ガンダムSEED", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "Unit-0322", name: "グーン", group: "機動戦士ガンダムSEED", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "Unit-0323", name: "ゾノ", group: "機動戦士ガンダムSEED", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "Unit-0324", name: "プロヴィデンスガンダム", group: "機動戦士ガンダムSEED", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "Unit-0325", name: "ストライクルージュ", group: "機動戦士ガンダムSEED", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "Unit-0326", name: "M1アストレイ", group: "機動戦士ガンダムSEED", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "Unit-0327", name: "フリーダムガンダム", group: "機動戦士ガンダムSEED", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "Unit-0328", name: "フリーダムガンダム(ミーティア)", group: "機動戦士ガンダムSEED", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "Unit-0329", name: "ジャスティスガンダム", group: "機動戦士ガンダムSEED", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "Unit-0330", name: "ジャスティスガンダム(ミーティア)", group: "機動戦士ガンダムSEED", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "Unit-0331", name: "105ダガー", group: "機動戦士ガンダムSEED", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "Unit-0332", name: "105ダガー(ジェットストライカー装備)", group: "機動戦士ガンダムSEED", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "Unit-0333", name: "106ダガー(ランチャーストライカー装備)", group: "機動戦士ガンダムSEED", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "Unit-0334", name: "ガンバレルダガー", group: "機動戦士ガンダムSEED", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "Unit-0335", name: "デュエルダガー", group: "機動戦士ガンダムSEED", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "Unit-0336", name: "デュエルダガー(フォルテストラ装備)", group: "機動戦士ガンダムSEED", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "Unit-0337", name: "バスターダガー", group: "機動戦士ガンダムSEED", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "Unit-0338", name: "ジンハイマニューバ", group: "機動戦士ガンダムSEED", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "Unit-0339", name: "シグーディープアームズ", group: "機動戦士ガンダムSEED", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "Unit-0340", name: "M1Aアストレイ", group: "機動戦士ガンダムSEED", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "Unit-0341", name: "スーパーハイペリオンガンダム", group: "機動戦士ガンダムSEED", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "Unit-0342", name: "ゲイツアサルト(シヴァ専用機)", group: "機動戦士ガンダムSEED", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "Unit-0343", name: "ドラグーンストライク", group: "機動戦士ガンダムSEED", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "Unit-0344", name: "ムラサメ 飛行能力試験型", group: "機動戦士ガンダムSEED", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "Unit-0345", name: "ゼーイーゲル", group: "機動戦士ガンダムSEED", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "Unit-0346", name: "ストライクフリーダムガンダム", group: "機動戦士ガンダムSEED DESTINY", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "Unit-0347", name: "インパルスガンダム", group: "機動戦士ガンダムSEED DESTINY", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "Unit-0348", name: "フォースインパルスガンダム", group: "機動戦士ガンダムSEED DESTINY", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "Unit-0349", name: "ソードインパルスガンダム", group: "機動戦士ガンダムSEED DESTINY", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "Unit-0350", name: "ブラストインパルスガンダム", group: "機動戦士ガンダムSEED DESTINY", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "Unit-0351", name: "セイバーガンダム", group: "機動戦士ガンダムSEED DESTINY", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "Unit-0352", name: "カオスガンダム", group: "機動戦士ガンダムSEED DESTINY", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "Unit-0353", name: "ガイアガンダム", group: "機動戦士ガンダムSEED DESTINY", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "Unit-0354", name: "アビスガンダム", group: "機動戦士ガンダムSEED DESTINY", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "Unit-0355", name: "ザクウォーリア", group: "機動戦士ガンダムSEED DESTINY", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "Unit-0356", name: "ブレイズザクウォーリア", group: "機動戦士ガンダムSEED DESTINY", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "Unit-0357", name: "スラッシュザクウォーリア", group: "機動戦士ガンダムSEED DESTINY", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "Unit-0358", name: "ガナーザクウォーリア", group: "機動戦士ガンダムSEED DESTINY", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "Unit-0359", name: "ザクファントム", group: "機動戦士ガンダムSEED DESTINY", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "Unit-0360", name: "ゲイツＲ", group: "機動戦士ガンダムSEED DESTINY", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "Unit-0361", name: "ジンハイマニューバ2型", group: "機動戦士ガンダムSEED DESTINY", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "Unit-0362", name: "ガズウート", group: "機動戦士ガンダムSEED DESTINY", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "Unit-0363", name: "バビ", group: "機動戦士ガンダムSEED DESTINY", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "Unit-0364", name: "アッシュ", group: "機動戦士ガンダムSEED DESTINY", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "Unit-0365", name: "デスティニーガンダム", group: "機動戦士ガンダムSEED DESTINY", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "Unit-0366", name: "レジェンドガンダム", group: "機動戦士ガンダムSEED DESTINY", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "Unit-0367", name: "グフイグナイテッド", group: "機動戦士ガンダムSEED DESTINY", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "Unit-0368", name: "ダガーＬ", group: "機動戦士ガンダムSEED DESTINY", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "Unit-0369", name: "ダガーL(ジェットストライカー装備)", group: "機動戦士ガンダムSEED DESTINY", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "Unit-0370", name: "ダガーL(ドッペルホルン連装無反動砲装備)", group: "機動戦士ガンダムSEED DESTINY", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "Unit-0371", name: "ダークダガーＬ", group: "機動戦士ガンダムSEED DESTINY", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "Unit-0372", name: "ウィンダム", group: "機動戦士ガンダムSEED DESTINY", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "Unit-0373", name: "ウィンダム(ジェットストライカー装備)", group: "機動戦士ガンダムSEED DESTINY", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "Unit-0374", name: "エグザス", group: "機動戦士ガンダムSEED DESTINY", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "Unit-0375", name: "ゲルズゲー", group: "機動戦士ガンダムSEED DESTINY", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "Unit-0376", name: "ザムザザー", group: "機動戦士ガンダムSEED DESTINY", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "Unit-0377", name: "デストロイガンダム", group: "機動戦士ガンダムSEED DESTINY", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "Unit-0378", name: "M1アストレイ(シュライク装備)", group: "機動戦士ガンダムSEED DESTINY", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "Unit-0379", name: "ムラサメ", group: "機動戦士ガンダムSEED DESTINY", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "Unit-0380", name: "ストライクルージュ(オオトリ)", group: "機動戦士ガンダムSEED DESTINY", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "Unit-0381", name: "アカツキ(オオワシ)", group: "機動戦士ガンダムSEED DESTINY", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "Unit-0382", name: "アカツキ(シラヌイ)", group: "機動戦士ガンダムSEED DESTINY", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "Unit-0383", name: "ドムトルーパー", group: "機動戦士ガンダムSEED DESTINY", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "Unit-0384", name: "インフィニットジャスティスガンダム", group: "機動戦士ガンダムSEED DESTINY", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "Unit-0385", name: "ストライクフリーダムガンダム(ミーティア)", group: "機動戦士ガンダムSEED DESTINY", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "Unit-0386", name: "インフィニットジャスティスガンダム(ミーティア)", group: "機動戦士ガンダムSEED DESTINY", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "Unit-0387", name: "ガンダムエクシア", group: "機動戦士ガンダム00", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "Unit-0388", name: "ガンダムデュナメス", group: "機動戦士ガンダム00", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "Unit-0389", name: "ガンダムキュリオス", group: "機動戦士ガンダム00", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "Unit-0390", name: "ガンダムヴァーチェ", group: "機動戦士ガンダム00", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "Unit-0391", name: "ガンダムナドレ", group: "機動戦士ガンダム00", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "Unit-0392", name: "GNアーマー TYPE-D", group: "機動戦士ガンダム00", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "Unit-0393", name: "GNアーマー TYPE-E", group: "機動戦士ガンダム00", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "Unit-0394", name: "0ガンダム", group: "機動戦士ガンダム00", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "Unit-0395", name: "ガンダムスローネアイン", group: "機動戦士ガンダム00", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "Unit-0396", name: "ガンダムスローネツヴァイ", group: "機動戦士ガンダム00", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "Unit-0397", name: "ガンダムスローネドライ", group: "機動戦士ガンダム00", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "Unit-0398", name: "ユニオンフラッグ", group: "機動戦士ガンダム00", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "Unit-0399", name: "オーバーフラッグ", group: "機動戦士ガンダム00", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "Unit-0400", name: "グラハム専用ユニオンフラッグカスタム", group: "機動戦士ガンダム00", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "Unit-0401", name: "グラハム専用ユニオンフラッグカスタムⅡ(GNフラッグ)", group: "機動戦士ガンダム00", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "Unit-0402", name: "ユニオンリアルド", group: "機動戦士ガンダム00", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "Unit-0403", name: "AEUイナクト", group: "機動戦士ガンダム00", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "Unit-0404", name: "AEUイナクト(デモカラー)", group: "機動戦士ガンダム00", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "Unit-0405", name: "AEUヘリオン", group: "機動戦士ガンダム00", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "Unit-0406", name: "ティエレン長距離射撃型", group: "機動戦士ガンダム00", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "Unit-0407", name: "ティエレン地上型", group: "機動戦士ガンダム00", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "Unit-0408", name: "ティエレン宇宙型", group: "機動戦士ガンダム00", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "Unit-0409", name: "ティエレン高機動型", group: "機動戦士ガンダム00", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "Unit-0410", name: "ティエレン高機動B型", group: "機動戦士ガンダム00", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "Unit-0411", name: "ティエレンタオツー", group: "機動戦士ガンダム00", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "Unit-0412", name: "アンフ", group: "機動戦士ガンダム00", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "Unit-0413", name: "アルヴァトーレ", group: "機動戦士ガンダム00", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "Unit-0414", name: "アルヴァアロン", group: "機動戦士ガンダム00", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "Unit-0415", name: "ジンクス", group: "機動戦士ガンダム00", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "Unit-0416", name: "サーシェス専用AEUイナクトカスタム(モラリア開発実験型)", group: "機動戦士ガンダム00", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "Unit-0417", name: "アグリッサ", group: "機動戦士ガンダム00", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "Unit-0418", name: "ガンダムエクシアリペア", group: "機動戦士ガンダム00", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "Unit-0419", name: "ガンダムエクシアリペアⅡ", group: "機動戦士ガンダム00", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "Unit-0420", name: "ダブルオーガンダム", group: "機動戦士ガンダム00", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "Unit-0421", name: "ダブルオーライザー", group: "機動戦士ガンダム00", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "Unit-0422", name: "ダブルオーライザー(最終決戦仕様)", group: "機動戦士ガンダム00", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "Unit-0423", name: "ケルディムガンダム", group: "機動戦士ガンダム00", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "Unit-0424", name: "ケルディムガンダム GNHW/R", group: "機動戦士ガンダム00", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "Unit-0425", name: "アリオスガンダム", group: "機動戦士ガンダム00", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "Unit-0426", name: "アリオスガンダム GNHW/M", group: "機動戦士ガンダム00", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "Unit-0427", name: "セラヴィーガンダム", group: "機動戦士ガンダム00", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "Unit-0428", name: "セラフィムガンダム", group: "機動戦士ガンダム00", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "Unit-0429", name: "セラヴィーガンダム GNHW/B", group: "機動戦士ガンダム00", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "Unit-0430", name: "セラフィムガンダム GNHW/B", group: "機動戦士ガンダム00", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "Unit-0431", name: "0ガンダム(実戦配備型/GNコンデンサー搭載仕様)", group: "機動戦士ガンダム00", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "Unit-0432", name: "0ガンダム(実戦配備型/GNドライヴ搭載仕様)", group: "機動戦士ガンダム00", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "Unit-0433", name: "GNアーチャー", group: "機動戦士ガンダム00", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "Unit-0434", name: "リボーンズガンダム", group: "機動戦士ガンダム00", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "Unit-0435", name: "マスラオ", group: "機動戦士ガンダム00", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "Unit-0436", name: "スサノオ", group: "機動戦士ガンダム00", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "Unit-0437", name: "アルケーガンダム", group: "機動戦士ガンダム00", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "Unit-0438", name: "エンプラス", group: "機動戦士ガンダム00", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "Unit-0439", name: "レグナント", group: "機動戦士ガンダム00", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "Unit-0440", name: "ガデッサ(リヴァイヴ機)", group: "機動戦士ガンダム00", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "Unit-0441", name: "ガラッゾ(ブリング機)", group: "機動戦士ガンダム00", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "Unit-0442", name: "ガラッゾ(ヒリング機)", group: "機動戦士ガンダム00", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "Unit-0443", name: "ガガ", group: "機動戦士ガンダム00", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "Unit-0444", name: "アヘッド", group: "機動戦士ガンダム00", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "Unit-0445", name: "アヘッド脳量子波対応型(スマルトロン)", group: "機動戦士ガンダム00", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "Unit-0446", name: "アヘッド近接戦闘型(サキガケ)", group: "機動戦士ガンダム00", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "Unit-0447", name: "ジンクスⅢ", group: "機動戦士ガンダム00", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "Unit-0448", name: "ガルムガンダム", group: "機動戦士ガンダム00", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "Unit-0449", name: "フルアーマー0ガンダム", group: "機動戦士ガンダム00", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "Unit-0450", name: "ガンダムAGE-1 ノーマル", group: "機動戦士ガンダムAGE", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "Unit-0451", name: "エルメダ", group: "機動戦士ガンダムAGE", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "Unit-0452", name: "ガラ", group: "機動戦士ガンダムAGE", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "Unit-0453", name: "ゼノ", group: "機動戦士ガンダムAGE", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "Unit-0454", name: "ジラ", group: "機動戦士ガンダムAGE", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "Unit-0455", name: "シャルドールM", group: "機動戦士ガンダムAGE", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "Unit-0456", name: "デスペラード", group: "機動戦士ガンダムAGE", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "Unit-0457", name: "ガンダムAGE-1 タイタス", group: "機動戦士ガンダムAGE", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "Unit-0458", name: "ガンダムAGE-1 スパロー", group: "機動戦士ガンダムAGE", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "Unit-0459", name: "Gエグゼス", group: "機動戦士ガンダムAGE", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "Unit-0460", name: "ジェノアスカスタム", group: "機動戦士ガンダムAGE", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "Unit-0461", name: "ジェノアス", group: "機動戦士ガンダムAGE", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "Unit-0462", name: "ゼダス", group: "機動戦士ガンダムAGE", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "Unit-0463", name: "デファース", group: "機動戦士ガンダムAGE", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "Unit-0464", name: "ガフラン", group: "機動戦士ガンダムAGE", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "Unit-0465", name: "バクト", group: "機動戦士ガンダムAGE", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "Unit-0466", name: "シャルドール", group: "機動戦士ガンダムAGE", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "Unit-0467", name: "ガンダムAGE-2 ノーマル", group: "機動戦士ガンダムAGE", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "Unit-0468", name: "ガンダムAGE-2 ダブルバレット", group: "機動戦士ガンダムAGE", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "Unit-0469", name: "Gバウンサー", group: "機動戦士ガンダムAGE", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "Unit-0470", name: "アデル", group: "機動戦士ガンダムAGE", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "Unit-0471", name: "アデルキャノン", group: "機動戦士ガンダムAGE", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "Unit-0472", name: "ジェノアスⅡ", group: "機動戦士ガンダムAGE", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "Unit-0473", name: "シャルドール改", group: "機動戦士ガンダムAGE", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "Unit-0474", name: "ゼイドラ", group: "機動戦士ガンダムAGE", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "Unit-0475", name: "クロノス", group: "機動戦士ガンダムAGE", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "Unit-0476", name: "ゼイダルス", group: "機動戦士ガンダムAGE", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "Unit-0477", name: "ゼダスM", group: "機動戦士ガンダムAGE", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "Unit-0478", name: "ゼダスR", group: "機動戦士ガンダムAGE", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "Unit-0479", name: "ドラド", group: "機動戦士ガンダムAGE", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "Unit-0480", name: "ガンダムAGE-1 2号機 アサルトジャケット", group: "機動戦士ガンダムAGE", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "Unit-0481", name: "ガンダムAGE-2 アルティメス", group: "機動戦士ガンダムAGE", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "Unit-0482", name: "ジェノアスフォックスカスタム", group: "機動戦士ガンダムAGE", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "Unit-0483", name: "ガンダム・バルバトス(第1形態)", group: "機動戦士ガンダム 鉄血のオルフェンズ", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "Unit-0484", name: "ガンダム・バルバトス(第4形態)", group: "機動戦士ガンダム 鉄血のオルフェンズ", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "Unit-0485", name: "ガンダム・バルバトス(第6形態)", group: "機動戦士ガンダム 鉄血のオルフェンズ", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "Unit-0486", name: "ガンダム・グシオン", group: "機動戦士ガンダム 鉄血のオルフェンズ", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "Unit-0487", name: "ガンダム・グシオンリベイク", group: "機動戦士ガンダム 鉄血のオルフェンズ", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "Unit-0488", name: "グレイズ改", group: "機動戦士ガンダム 鉄血のオルフェンズ", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "Unit-0489", name: "グレイズ改弐(流星号)", group: "機動戦士ガンダム 鉄血のオルフェンズ", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "Unit-0490", name: "鉄華団モビルワーカー", group: "機動戦士ガンダム 鉄血のオルフェンズ", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "Unit-0491", name: "百里", group: "機動戦士ガンダム 鉄血のオルフェンズ", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "Unit-0492", name: "百錬", group: "機動戦士ガンダム 鉄血のオルフェンズ", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "Unit-0493", name: "漏影", group: "機動戦士ガンダム 鉄血のオルフェンズ", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "Unit-0494", name: "ガンダム・キマリス", group: "機動戦士ガンダム 鉄血のオルフェンズ", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "Unit-0495", name: "ガンダム・キマリス(ブースター装備)", group: "機動戦士ガンダム 鉄血のオルフェンズ", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "Unit-0496", name: "ガンダム・キマリストルーパー", group: "機動戦士ガンダム 鉄血のオルフェンズ", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "Unit-0497", name: "グレイズ", group: "機動戦士ガンダム 鉄血のオルフェンズ", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "Unit-0498", name: "グレイズ(決闘仕様)", group: "機動戦士ガンダム 鉄血のオルフェンズ", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "Unit-0499", name: "グレイズリッター", group: "機動戦士ガンダム 鉄血のオルフェンズ", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "Unit-0500", name: "シュヴァルベ・グレイズ(マクギリス機)", group: "機動戦士ガンダム 鉄血のオルフェンズ", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "Unit-0501", name: "シュヴァルベ・グレイズ(ガエリオ機)", group: "機動戦士ガンダム 鉄血のオルフェンズ", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "Unit-0502", name: "シュヴァルベ・グレイズ(アイン機)", group: "機動戦士ガンダム 鉄血のオルフェンズ", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "Unit-0503", name: "グレイズ・アイン", group: "機動戦士ガンダム 鉄血のオルフェンズ", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "Unit-0504", name: "グリムゲルデ", group: "機動戦士ガンダム 鉄血のオルフェンズ", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "Unit-0505", name: "ギャラルホルンモビルワーカー", group: "機動戦士ガンダム 鉄血のオルフェンズ", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "Unit-0506", name: "マン・ロディ", group: "機動戦士ガンダム 鉄血のオルフェンズ", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "Unit-0507", name: "スピナ・ロディ", group: "機動戦士ガンダム 鉄血のオルフェンズ", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "Unit-0508", name: "ガンダム・バルバトスルプス", group: "機動戦士ガンダム 鉄血のオルフェンズ", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "Unit-0509", name: "ガンダム・バルバトスルプスレクス", group: "機動戦士ガンダム 鉄血のオルフェンズ", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "Unit-0510", name: "ガンダム・グシオンリベイクフルシティ", group: "機動戦士ガンダム 鉄血のオルフェンズ", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "Unit-0511", name: "ガンダム・フラウロス(流星号)", group: "機動戦士ガンダム 鉄血のオルフェンズ", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "Unit-0512", name: "獅雷", group: "機動戦士ガンダム 鉄血のオルフェンズ", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "Unit-0513", name: "獅雷改(流星号)", group: "機動戦士ガンダム 鉄血のオルフェンズ", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "Unit-0514", name: "雷雷号", group: "機動戦士ガンダム 鉄血のオルフェンズ", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "Unit-0515", name: "ランドマン・ロディ", group: "機動戦士ガンダム 鉄血のオルフェンズ", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "Unit-0516", name: "辟邪", group: "機動戦士ガンダム 鉄血のオルフェンズ", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "Unit-0517", name: "ガンダム・ヴィダール", group: "機動戦士ガンダム 鉄血のオルフェンズ", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "Unit-0518", name: "ガンダム・キマリスヴィダール", group: "機動戦士ガンダム 鉄血のオルフェンズ", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "Unit-0519", name: "レギンレイズ", group: "機動戦士ガンダム 鉄血のオルフェンズ", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "Unit-0520", name: "レギンレイズ・ジュリア", group: "機動戦士ガンダム 鉄血のオルフェンズ", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "Unit-0521", name: "レギンレイズ・ジュリア(地上戦仕様)", group: "機動戦士ガンダム 鉄血のオルフェンズ", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "Unit-0522", name: "グレイズシルト", group: "機動戦士ガンダム 鉄血のオルフェンズ", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "Unit-0523", name: "ガンダム・バエル", group: "機動戦士ガンダム 鉄血のオルフェンズ", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "Unit-0524", name: "フレック・グレイズ", group: "機動戦士ガンダム 鉄血のオルフェンズ", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "Unit-0525", name: "ゲイレール", group: "機動戦士ガンダム 鉄血のオルフェンズ", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "Unit-0526", name: "ゲイレール・シャルフリヒター", group: "機動戦士ガンダム 鉄血のオルフェンズ", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "Unit-0527", name: "ヘルムヴィーゲ・リンカー", group: "機動戦士ガンダム 鉄血のオルフェンズ", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "Unit-0528", name: "ユーゴー", group: "機動戦士ガンダム 鉄血のオルフェンズ", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "Unit-0529", name: "ガルム・ロディ", group: "機動戦士ガンダム 鉄血のオルフェンズ", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "Unit-0530", name: "ジルダ", group: "機動戦士ガンダム 鉄血のオルフェンズ", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "Unit-0531", name: "ハシュマル", group: "機動戦士ガンダム 鉄血のオルフェンズ", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "Unit-0532", name: "プルーマ", group: "機動戦士ガンダム 鉄血のオルフェンズ", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "Unit-0533", name: "ガンダム・バルバトスルプスレクス【阿頼耶識リミッター解除/半壊】", group: "機動戦士ガンダム 鉄血のオルフェンズ", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "Unit-0534", name: "ガンダム・ルブリス", group: "機動戦士ガンダム 水星の魔女", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "Unit-0535", name: "ベギルベウ", group: "機動戦士ガンダム 水星の魔女", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "Unit-0536", name: "ガンダム・ルブリス 量産試作モデル", group: "機動戦士ガンダム 水星の魔女", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "Unit-0537", name: "ハイングラ", group: "機動戦士ガンダム 水星の魔女", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "Unit-0538", name: "ガンダム・エアリアル", group: "機動戦士ガンダム 水星の魔女", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "Unit-0539", name: "ガンダム・エアリアル(ミラソウル社製フライトユニット装備)", group: "機動戦士ガンダム 水星の魔女", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "Unit-0540", name: "ガンダム・エアリアル改修型", group: "機動戦士ガンダム 水星の魔女", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "Unit-0541", name: "ディランザ グエル専用機", group: "機動戦士ガンダム 水星の魔女", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "Unit-0542", name: "ディランザ", group: "機動戦士ガンダム 水星の魔女", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "Unit-0543", name: "ダリルバルデ", group: "機動戦士ガンダム 水星の魔女", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "Unit-0544", name: "ガンダム・ファラクト", group: "機動戦士ガンダム 水星の魔女", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "Unit-0545", name: "ザウォート", group: "機動戦士ガンダム 水星の魔女", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "Unit-0546", name: "ハインドリー", group: "機動戦士ガンダム 水星の魔女", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "Unit-0547", name: "ベギルペンデ", group: "機動戦士ガンダム 水星の魔女", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "Unit-0548", name: "ミカエリス", group: "機動戦士ガンダム 水星の魔女", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "Unit-0549", name: "デミトレーナー", group: "機動戦士ガンダム 水星の魔女", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "Unit-0550", name: "デミトレーナー チュチュ専用機", group: "機動戦士ガンダム 水星の魔女", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "Unit-0551", name: "デミギャリソン", group: "機動戦士ガンダム 水星の魔女", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "Unit-0552", name: "ガンダム・ルブリス・ウル", group: "機動戦士ガンダム 水星の魔女", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "Unit-0553", name: "ガンダム・ルブリス・ソーン", group: "機動戦士ガンダム 水星の魔女", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "Unit-0554", name: "デミバーディング", group: "機動戦士ガンダム 水星の魔女", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "Unit-0555", name: "ガンダム・シュバルゼッテ", group: "機動戦士ガンダム 水星の魔女", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "Unit-0556", name: "ガンダム・キャリバーン", group: "機動戦士ガンダム 水星の魔女", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "Unit-0557", name: "ガンダム・ファラクト(Season2仕様)", group: "機動戦士ガンダム 水星の魔女", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "Unit-0558", name: "ミカエリス(Season2仕様)", group: "機動戦士ガンダム 水星の魔女", owned: false, limitBreak: 0, isLevelMax: false },
{ id: "Unit-0559", name: "ダリルバルデ(Season2仕様)", group: "機動戦士ガンダム 水星の魔女", owned: false, limitBreak: 0, isLevelMax: false },



]; //これは〆の「」。この上にデータ。

const overallRate = document.getElementById("overallRate");
const itemList = document.getElementById("itemList");
const resetDataBtn = document.getElementById("resetDataBtn");
const STORAGE_KEY = "ggene_checker_data";
const MAX_LIMIT_BREAK = 3;


const groupOpenState = {};

function saveData() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
}

function loadData() {
  const savedData = localStorage.getItem(STORAGE_KEY);
  if (!savedData) return;

  const parsedItems = JSON.parse(savedData);

  parsedItems.forEach(savedItem => {
    const item = items.find(i => i.id === savedItem.id);
    if (!item) return;

    item.owned = savedItem.owned;
    item.limitBreak = savedItem.limitBreak;
    item.isLevelMax = savedItem.isLevelMax;
  });
}

function resetData() {
  localStorage.removeItem(STORAGE_KEY);

  items.forEach(item => {
    item.owned = false;
    item.limitBreak = 0;
    item.isLevelMax = false;
  });

  renderAll();
}

resetDataBtn.addEventListener("click", function () {
  const ok = confirm("保存データを削除して、すべて初期状態に戻します。よろしいですか？");
  if (!ok) return;

  resetData();
});


function renderOverallRate() {
  const ownedItems = items.filter(item => item.owned);

  const ownedCount = ownedItems.length;
  const totalCount = items.length;

  const maxLimitBreakCount = ownedItems.filter(item => item.limitBreak === MAX_LIMIT_BREAK).length;
  const levelMaxCount = ownedItems.filter(item => item.isLevelMax).length;

  const rate = totalCount === 0 ? 0 : (ownedCount / totalCount) * 100;

  overallRate.textContent =
    `所持 ${ownedCount}/${totalCount} (${rate.toFixed(1)}%)　` +
    `限凸 ${maxLimitBreakCount}/${ownedCount}　` +
    `LV MAX ${levelMaxCount}/${ownedCount}`;
}


function getStarDisplay(rarity, limitBreak) {
  let result = "";

  for (let i = 0; i < rarity; i++) {
    if (i < limitBreak) {
      result += "✦";
    } else {
      result += "✧";
    }
  }

  return result;
}


function renderItems() {
  itemList.innerHTML = "";

  const groups = [...new Set(items.map(item => item.group))];

  groups.forEach(groupName => {
    const groupItems = items.filter(item => item.group === groupName);

   const totalCount = groupItems.length;

const ownedItems = groupItems.filter(item => item.owned);
const ownedCount = ownedItems.length;

const ownedRate = totalCount === 0 ? 0 : (ownedCount / totalCount) * 100;

const maxLimitBreakCount = ownedItems.filter(item => item.limitBreak === MAX_LIMIT_BREAK).length;
const limitBreakRate = ownedCount === 0 ? 0 : (maxLimitBreakCount / ownedCount) * 100;

const levelMaxCount = ownedItems.filter(item => item.isLevelMax).length;
const levelMaxRate = ownedCount === 0 ? 0 : (levelMaxCount / ownedCount) * 100;


    const groupDiv = document.createElement("div");

    const header = document.createElement("div");
    header.className = "group-header";

    if (groupOpenState[groupName] === undefined) {
      groupOpenState[groupName] = true;
    }

    const isOpen = groupOpenState[groupName];

header.innerHTML = `
  <span class="group-title">${groupName}</span>
  <span class="group-stats">
    所持 ${ownedCount}/${totalCount}　
    限凸 ${maxLimitBreakCount}/${ownedCount}　
    LV ${levelMaxCount}/${ownedCount}
  </span>
  <span class="group-arrow">
    ${isOpen ? "▼" : "▶"}
  </span>
`;


    header.addEventListener("click", function () {
      groupOpenState[groupName] = !groupOpenState[groupName];
      renderItems();
    });

    groupDiv.appendChild(header);


    if (isOpen) {

const actionsDiv = document.createElement("div");
actionsDiv.className = "group-actions";

// 全所持
const ownAllBtn = document.createElement("button");
ownAllBtn.className = "group-action-btn";
ownAllBtn.textContent = "全所持";
ownAllBtn.addEventListener("click", function (e) {
  e.stopPropagation();

  groupItems.forEach(item => {
    item.owned = true;
  });

  renderAll();
});

// 全限凸
const maxBreakAllBtn = document.createElement("button");
maxBreakAllBtn.className = "group-action-btn";
maxBreakAllBtn.textContent = "全限凸";
maxBreakAllBtn.addEventListener("click", function (e) {
  e.stopPropagation();

  groupItems.forEach(item => {
    item.owned = true;
    item.limitBreak = MAX_LIMIT_BREAK;
  });

  renderAll();
});

// 全LV MAX
const maxLevelAllBtn = document.createElement("button");
maxLevelAllBtn.className = "group-action-btn";
maxLevelAllBtn.textContent = "全LV MAX";
maxLevelAllBtn.addEventListener("click", function (e) {
  e.stopPropagation();

  groupItems.forEach(item => {
    item.owned = true;
    item.isLevelMax = true;
  });

  renderAll();
});

// 全解除
const clearAllBtn = document.createElement("button");
clearAllBtn.className = "group-action-btn";
clearAllBtn.textContent = "全解除";
clearAllBtn.addEventListener("click", function (e) {
  e.stopPropagation();

  groupItems.forEach(item => {
    item.owned = false;
    item.limitBreak = 0;
    item.isLevelMax = false;
  });

  renderAll();
});

actionsDiv.appendChild(ownAllBtn);
actionsDiv.appendChild(maxBreakAllBtn);
actionsDiv.appendChild(maxLevelAllBtn);
actionsDiv.appendChild(clearAllBtn);

groupDiv.appendChild(actionsDiv);


      const grid = document.createElement("div");
      grid.className = "group-grid";

      groupItems.forEach(item => {
        const div = document.createElement("div");
        div.className = "item";

        if (item.owned) {
          div.classList.add("owned");
        }

        // --- 上（所持）
        const topDiv = document.createElement("div");
        topDiv.className = "item-top";

        const nameDiv = document.createElement("div");
        nameDiv.className = "name";
        nameDiv.textContent = item.name;

        topDiv.appendChild(nameDiv);

        topDiv.addEventListener("click", function () {
          item.owned = !item.owned;

          if (!item.owned) {
            item.limitBreak = 0;
            item.isLevelMax = false;
          }


  renderAll();
});
        const bottomDiv = document.createElement("div");
        bottomDiv.className = "item-bottom";

        const starBtn = document.createElement("button");
        starBtn.className = "bottom-btn star-btn";
        starBtn.textContent = getStarDisplay(MAX_LIMIT_BREAK, item.limitBreak);
        if (item.owned && item.limitBreak === MAX_LIMIT_BREAK) {
        starBtn.classList.add("is-max");
        }

        starBtn.addEventListener("click", function (e) {
        e.stopPropagation();

        if (!item.owned) return;  

        item.limitBreak++;
        if (item.limitBreak > MAX_LIMIT_BREAK) {
          item.limitBreak = 0;
        }
        renderAll();
       });



        const levelBtn = document.createElement("button");
        levelBtn.className = "bottom-btn level-btn";
        levelBtn.textContent = item.isLevelMax ? "MAX" : "LV ";

        if (item.owned && item.isLevelMax) {
          levelBtn.classList.add("is-max");
        }


        levelBtn.addEventListener("click", function (e) {
          e.stopPropagation();

          if (!item.owned) return;  

          item.isLevelMax = !item.isLevelMax;
          renderAll();
        });


if (!item.owned) {
  starBtn.classList.add("disabled");
  levelBtn.classList.add("disabled");
}

        bottomDiv.appendChild(starBtn);
        bottomDiv.appendChild(levelBtn);

        div.appendChild(topDiv);
        div.appendChild(bottomDiv);

        grid.appendChild(div);
      });

      groupDiv.appendChild(grid);
    }

    itemList.appendChild(groupDiv);
  });
}





function renderAll() {
  renderOverallRate();
  renderItems();
  saveData();
}

loadData();
renderAll();