export const locations = {
  yunmen: {
    id: "yunmen",
    title: "云门",
    subtitle: "山门晨雾未散。你仍只是门中一个不起眼的杂役弟子。",
    children: [
      ["library", "藏经阁", "借阅功法、查阅典籍"],
      ["disciple_quarters", "弟子居", "居舍与同门日常"],
      ["dao_platform", "问道台", "听讲、考核与宗门仪典"],
      ["training_ground", "演武场", "切磋、观战、宗门比试"],
      ["back_mountain", "后山", "采药、探索与妖兽遭遇"],
      ["alchemy_hall", "丹房", "丹药、炼丹与药材事务"],
      ["town", "城镇", "坊市、酒肆、书肆与山下生活"],
      ["forbidden", "禁地", "尚未开放"]
    ]
  },

  disciple_quarters: {
    id: "disciple_quarters",
    parent: "yunmen",
    title: "云门 · 弟子居",
    subtitle: "进入此处后，云门总图不再显示。这里只呈现弟子居内部空间。",
    children: [
      ["side_room", "偏舍", "你的住处"],
      ["common_yard", "公院", "同门往来与随机偶遇"],
      ["peer_rooms", "同门居舍", "拜访已认识的同门"],
      ["chore_hall", "杂役堂", "领取差事与交付任务"],
      ["dining_hall", "膳堂", "用膳与日常消息"],
      ["bath_hall", "浴堂", "沐浴与特殊日常事件"],
      ["steward_room", "管事房", "月例、考核与身份事务"]
    ]
  },

  side_room: {
    id: "side_room",
    parent: "disciple_quarters",
    title: "云门 · 弟子居 · 偏舍",
    subtitle: "木榻、蒲团和一只旧木箱，就是你在云门最初的全部家当。",
    actions: [
      ["meditate", "打坐吐纳", "消耗一个时辰，进行基础修炼"],
      ["rest", "歇息", "恢复状态，并按选择推进时间"],
      ["read", "阅读功法", "研读已拥有的功法与心得"],
      ["storage", "整理储物", "查看物品、装备与任务材料"]
    ]
  }
};
