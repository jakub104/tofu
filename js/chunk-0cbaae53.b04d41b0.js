(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0cbaae53"],{2205:function(e,i,t){"use strict";t.r(i);var s=function(){var e=this,i=e.$createElement,t=e._self._c||i;return t("div",{staticClass:"view",style:{animation:e.$loaded?"bottomElation 0.5s both":"bottomElation 0.5s 1s both"}},[e.quizLink?t("div",{staticClass:"quiz-link"},[t("h1",{staticClass:"quiz-link__title"},[e._v("Oto twój link:")]),t("input",{staticClass:"quiz-link__input",attrs:{id:"link-input",type:"text"},domProps:{value:e.quizLink}}),t("div",{staticClass:"quiz-link__nav"},[t("Button",{attrs:{content:"Skopiuj!"},on:{click:e.copyLink}}),t("Button",{attrs:{content:"Sprawdź"},on:{click:e.openLink}})],1)]):t("form",{staticClass:"test-form",on:{submit:function(i){return i.preventDefault(),e.save(i)}}},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.username,expression:"username"}],staticClass:"input-name",attrs:{placeholder:"Wpisz nick...",type:"text",required:""},domProps:{value:e.username},on:{input:function(i){i.target.composing||(e.username=i.target.value)}}}),e.questions?t("div",{staticClass:"question__mobile"},[e._v(e._s(e.questions[e.activeIndex].refunds.direct)+" ")]):e._e(),e.questions?t("div",{class:["question",{"answer-yes":"+"===e.questions[e.activeIndex].answer,"answer-no":"-"===e.questions[e.activeIndex].answer}]},[t("div",{staticClass:"question__nav",on:{click:e.indexDown}},[t("fa-icon",{attrs:{icon:"angle-left"}})],1),t("div",{staticClass:"question__nav",on:{click:e.indexUp}},[t("fa-icon",{attrs:{icon:"angle-right"}})],1),t("div",{staticClass:"question__title",on:{click:function(i){e.questionPreview=!e.questionPreview}}},[t("div",{class:["question__title__content",{"question__title__content--ellipsis":!e.questionPreview}]},[e._v(e._s(e.questions[e.activeIndex].refunds.direct))]),e.windowWidth<800?t("fragment",[e.questionPreview?t("fa-icon",{staticClass:"question__title__icon",attrs:{icon:"angle-up"}}):t("fa-icon",{staticClass:"question__title__icon",attrs:{icon:"angle-down"}})],1):e._e()],1),t("div",{directives:[{name:"bg",rawName:"v-bg",value:e.questions[e.activeIndex].img,expression:"questions[activeIndex].img"}],staticClass:"question__image"}),t("div",{staticClass:"question__decisions"},[t("fragment",[t("div",{staticClass:"question__decision",on:{click:function(i){return e.answer("+")}}},[t("fa-icon",{attrs:{icon:"check"}})],1),t("div",{staticClass:"question__decision"},[e._v(" | ")]),t("div",{staticClass:"question__decision",on:{click:function(i){return e.answer("-")}}},[t("fa-icon",{attrs:{icon:"times"}})],1)])],1)]):e._e(),t("div",{staticClass:"description"},[e.all<10?t("fragment",[t("div",{staticClass:"description__progress"},[t("div",{staticClass:"description__progress__bar",style:{width:e.all%10*10+"%"}})]),t("div",{staticClass:"description__score"},[e._v(e._s(e.all)+" / 10")])]):t("fragment",[t("Button",{attrs:{content:"Utwórz!",type:"submit"}})],1)],1)])])},n=[],o=(t("99af"),t("4160"),t("caad"),t("159b"),t("9568")),a=t("ca45"),r={name:"Create",components:{Button:a["a"]},data:function(){return{windowWidth:window.innerWidth,questionPreview:!1,username:"",questions:null,activeIndex:0,all:0,quizLink:""}},mounted:function(){var e=this;this.questions=this.shuffle(o),window.addEventListener("resize",(function(){e.windowWidth=window.innerWidth}))},beforeDestroy:function(){var e=this;window.removeEventListener("resize",(function(){e.windowWidth=window.innerWidth}))},methods:{shuffle:function(e){for(var i=e.length-1;i>0;i--){var t=Math.floor(Math.random()*(i+1)),s=[e[t],e[i]];e[i]=s[0],e[t]=s[1]}return e},countAll:function(){var e=0;this.questions.forEach((function(i){i.answer&&e++})),this.all=e},answer:function(e){var i=this;console.log(this.questions[this.activeIndex]),this.questions[this.activeIndex].answer=e,setTimeout((function(){i.indexUp(),i.countAll()}),500)},indexUp:function(){this.activeIndex<this.questions.length-1?this.activeIndex++:this.activeIndex=0},indexDown:function(){this.activeIndex>0?this.activeIndex--:this.activeIndex=this.questions.length-1},save:function(){var e=this,i=[];this.$db.collection("quizzes").get().then((function(e){e.forEach((function(e){i.push(e.id)}))})).then((function(){if(console.log(i),i.includes(e.username))alert("Taki użytkownik istnieje już w bazie!");else{var t=[];e.questions.forEach((function(e){e.answer&&t.push(e)})),console.log(e.$db.collection("quizzes").doc(e.username).set({owner:e.username,questions:t,answers:[]})),e.quizLink="".concat(window.location.href,"/").concat(encodeURI(e.username)),e.$route.push({name:"Home"})}}))},copyLink:function(){var e=document.getElementById("link-input");e.select(),e.setSelectionRange(0,99999),document.execCommand("copy")},openLink:function(){window.open(this.quizLink)}}},c=r,d=(t("5076"),t("2877")),u=Object(d["a"])(c,s,n,!1,null,"272a1d09",null);i["default"]=u.exports},"2c56":function(e,i,t){},5076:function(e,i,t){"use strict";t("2c56")},8418:function(e,i,t){"use strict";var s=t("c04e"),n=t("9bf2"),o=t("5c6c");e.exports=function(e,i,t){var a=s(i);a in e?n.f(e,a,o(0,t)):e[a]=t}},9568:function(e){e.exports=JSON.parse('[{"refunds":{"direct":"Masz jakiś tatuaż?","indirect":"ma jakiś tatuaż?"},"answer":null,"img":"https://c.pxhere.com/photos/de/31/naked_body_nude_woman_female_sexy_girl_erotic-1056042.jpg!s"},{"refunds":{"direct":"Lubisz podróżować?","indirect":"lubi podróżować?"},"answer":null,"img":"https://c.pxhere.com/photos/40/38/hiker_standing_woman_top_journey_adventure_backpack_hiking-697812.jpg!s"},{"refunds":{"direct":"Często ufasz ludziom?","indirect":"często ufa ludziom?"},"answer":null,"img":"https://c.pxhere.com/photos/b1/a1/hand_holding_hand_companionship_friend_couple-46500.jpg!s"},{"refunds":{"direct":"Lubisz kawę?","indirect":"lubi kawę?"},"answer":null,"img":"https://c.pxhere.com/photos/ad/06/coffee_coffe_latte-775198.jpg!s"},{"refunds":{"direct":"Lubisz się uczyć?","indirect":"lubi się uczyć?"},"answer":null,"img":"https://c.pxhere.com/photos/3b/a9/smart_child_clever_intelligent_glasses_spectacle_wearers_boy_sweet-1118805.jpg!s"},{"refunds":{"direct":"Jesteś optymistą?","indirect":"jest optymistą?"},"answer":null,"img":"https://c.pxhere.com/photos/8b/fb/say_yes_to_the_live_joy_lust_for_life_frohsinn_satisfaction_self_confidence_self_confidence_happiness-1380074.jpg!s"},{"refunds":{"direct":"Często udzielasz się w Social Mediach?","indirect":"często udziela się w Social Mediach?"},"answer":null,"img":"https://c.pxhere.com/photos/fa/10/laptop_ring_hand_iphone_phone-3859.jpg!s"},{"refunds":{"direct":"Lubisz czytać książki?","indirect":"lubisz czytać książki?"},"answer":null,"img":"https://c.pxhere.com/photos/ba/a9/still_life_teddy_white_read_book_background_blue-844147.jpg!s"},{"refunds":{"direct":"Lubisz spędzać czas z przyjaciółmi?","indirect":"lubi spędzać czas z przyjaciółmi?"},"answer":null,"img":"https://c.pxhere.com/photos/04/be/children_river_birds_joy_splash_water_boy_animals-1271092.jpg!s"},{"refunds":{"direct":"Lubisz gry zespołowe?","indirect":"lubi gry zespołowe?"},"answer":null,"img":"https://c.pxhere.com/photos/33/b5/jump_action_fluent_the_activity_africans_the_ball_boys_brazil-1271229.jpg!s"},{"refunds":{"direct":"Lubisz gotować?","indirect":"lubi gotować?"},"answer":null,"img":"https://c.pxhere.com/photos/ca/d2/olive_oil_salad_dressing_cooking_olive_healthy_vegetarian_food_diet-853081.jpg!s"},{"refunds":{"direct":"Lubisz czekoladę?","indirect":"lubi czekoladę?"},"answer":null,"img":"https://c.pxhere.com/photos/87/6d/brownie_dessert_cake_sweet_delicious_brown_snack_bake-919684.jpg!s"},{"refunds":{"direct":"Dużo mówisz?","indirect":"dużo mówi?"},"answer":null,"img":"https://c.pxhere.com/photos/45/1b/woman_working_business_woman_laptop_computer_professional_cell_phone_communication-893407.jpg!s"},{"refunds":{"direct":"Potrafisz tańczyć?","indirect":"potrafi tańczyć?"},"answer":null,"img":"https://c.pxhere.com/photos/b9/b4/dancing_girl_woman_field_sunrise-117282.jpg!s"},{"refunds":{"direct":"Wybaczasz ludziom błędy?","indirect":"wybacza ludziom błędy?"},"answer":null,"img":"https://c.pxhere.com/photos/ed/e7/tree_boy_person_hiking_friend-117602.jpg!s"},{"refunds":{"direct":"Jesteś osobą poważną?","indirect":"jest osobą poważną?"},"answer":null,"img":"https://c.pxhere.com/images/c9/ab/cf0f99fc676ec2b28c3f94e1be2e-1445427.jpg!s"},{"refunds":{"direct":"Dużo narzekasz?","indirect":"dużo narzeka?"},"answer":null,"img":"https://c.pxhere.com/photos/46/bb/upset_sad_confused_figurine_unhappy_sadness_depressed_depression-772531.jpg!s"},{"refunds":{"direct":"Lubisz grać w planszówki?","indirect":"lubi grać w planszówki?"},"answer":null,"img":"https://c.pxhere.com/images/1d/c9/58fb6abb43056f25a6b3dfd10982-1452219.jpg!s"},{"refunds":{"direct":"Lubisz grać w gry video?","indirect":"lubi grać w gry video?"},"answer":null,"img":"https://c.pxhere.com/photos/5c/61/video_controller_video_game_controller_remote_control_gaming_console_game_gaming_playstation_controller-1338810.jpg!s"},{"refunds":{"direct":"Szybko się upijasz?","indirect":"szybko się upija?"},"answer":null,"img":"https://c.pxhere.com/photos/ae/1c/alcohol_hangover_event_death_drunk_alcoholic_fun-941426.jpg!s"},{"refunds":{"direct":"Lubisz lody?","indirect":"lubi lody?"},"answer":null,"img":"https://c.pxhere.com/photos/a1/0b/ice_cream_cone_melting_hot_ice_cream_scoop_temptation_ice_cream_dessert_icecream-642837.jpg!s"},{"refunds":{"direct":"Często robisz zakupy?","indirect":"często robi zakupy?"},"answer":null,"img":"https://c.pxhere.com/photos/a1/6d/shopping_business_retail_shopping_cart_transport_supermarket_food_purchasing-1052603.jpg!s"},{"refunds":{"direct":"Lubisz żartować?","indirect":"lubi żartować?"},"answer":null,"img":"https://c.pxhere.com/images/65/b8/8da2970da7446e37747e22dc5928-1433937.jpg!s"},{"refunds":{"direct":"Śpiewasz pod prysznicem?","indirect":"śpiewa pod prysznicem?"},"answer":null,"img":"https://c.pxhere.com/photos/44/1b/adult_bath_beautiful_close_up_face_girl_hair_model-1364661.jpg!s"},{"refunds":{"direct":"Często myślisz o przeszłości?","indirect":"często myśli o przeszłości?"},"answer":null,"img":"https://c.pxhere.com/photos/9f/8a/man_face_black_white_eyes_nose_hand_based_on-1343936.jpg!s"},{"refunds":{"direct":"Potrafisz grać na instrumencie muzycznym?","indirect":"potrafi grać na instrumencie muzycznym?"},"answer":null,"img":"https://c.pxhere.com/photos/0f/3f/musician_country_song_banjo_ukulele_guitar_acoustic_guitar_musical_instrument_instrument-965005.jpg!s"},{"refunds":{"direct":"Wyznałeś(aś) już komuś miłość?","indirect":"wyznał(a) już komuś miłość?"},"answer":null,"img":"https://c.pxhere.com/images/ac/71/2173247a297a63c1b3317e8bfd23-1588909.jpg!s"},{"refunds":{"direct":"Używasz perfum każdego dnia?","indirect":"używa perfum każdego dnia?"},"answer":null,"img":"https://c.pxhere.com/photos/f8/76/frogs_chick_beverages_bottles_alcohol_figures_drink_benefit_from-497420.jpg!s"},{"refunds":{"direct":"Kochasz zwierzęta?","indirect":"kocha zwierzęta?"},"answer":null,"img":"https://c.pxhere.com/photos/9f/3a/piglet_wildpark_poing_baby_small_pigs_cute_sweet_funny_mini-1043560.jpg!s"},{"refunds":{"direct":"Jesteś rannym ptaszkiem?","indirect":"jest rannym ptaszkiem?"},"answer":null,"img":"https://c.pxhere.com/images/01/2b/9c204f31df4d316c29ce196b5ec2-1633006.jpg!s"},{"refunds":{"direct":"Umiesz szybko odnaleźć się w sytuacji?","indirect":"umie szybko odnaleźć się w sytuacji?"},"answer":null,"img":"https://c.pxhere.com/photos/5b/1b/frog_figure_files_stack_files_stacked_office_decoration_green-806441.jpg!s"},{"refunds":{"direct":"Chcesz mieć dzieci?","indirect":"chce mieć dzieci?"},"answer":null,"img":"https://c.pxhere.com/photos/76/b5/brothers_family_siblings_boys_love_together_two_care-934018.jpg!s"},{"refunds":{"direct":"Często się spóźniasz?","indirect":"często się spóźnia?"},"answer":null,"img":"https://c.pxhere.com/photos/0f/a7/work_management_time_management_office_working_deadline_schedule_management_time-700451.jpg!s"},{"refunds":{"direct":"Lubisz spędzać czas w pojedynkę?","indirect":"lubi spędzać czas w pojedynkę?"},"answer":null,"img":"https://c.pxhere.com/photos/49/a8/looking_man_person_view_serene-3896.jpg!s"},{"refunds":{"direct":"Wierzysz w ludzi?","indirect":"wierzy w ludzi?"},"answer":null,"img":"https://c.pxhere.com/photos/28/f6/adventure_height_level_arm_assistance_athlete_boys_challenge_cliff-1026034.jpg!s"},{"refunds":{"direct":"Dużo śpisz?","indirect":"dużo śpi?"},"answer":null,"img":"https://c.pxhere.com/photos/1e/82/sleeping_child_napping_girl_kid_little_cute_bed-810142.jpg!s"},{"refunds":{"direct":"Lubisz spędzać czas z rodziną?","indirect":"lubi spędzać czas z rodziną?"},"answer":null,"img":"https://c.pxhere.com/photos/f1/eb/kids_chikdren_sister_brother_gradd_sitting_outddors_childhood-1363415.jpg!s"},{"refunds":{"direct":"Lubisz oglądać filmy?","indirect":"lubi oglądać filmy?"},"answer":null,"img":"https://c.pxhere.com/images/68/04/f6eb0b22503922bdea7b5babd7a4-1454963.jpg!s"},{"refunds":{"direct":"Oddałeś(aś) kiedyś honorowo krew?","indirect":"oddał(a) kiedyś honorowo krew?"},"answer":null,"img":"https://firebasestorage.googleapis.com/v0/b/tof-uu.appspot.com/o/IMG_20201217_192223.jpg?alt=media&token=38d0e5f6-bb0f-495c-b515-d0f07c5686df"},{"refunds":{"direct":"Chcesz wziąć ślub?","indirect":"chce wziąć ślub?"},"answer":null,"img":"https://c.pxhere.com/photos/bf/39/wedding_couple_love_wedding_couple_groom_woman_young_romance-813951.jpg!s"}]')},"99af":function(e,i,t){"use strict";var s=t("23e7"),n=t("d039"),o=t("e8b5"),a=t("861d"),r=t("7b0b"),c=t("50c4"),d=t("8418"),u=t("65f0"),l=t("1dde"),_=t("b622"),p=t("2d00"),h=_("isConcatSpreadable"),m=9007199254740991,f="Maximum allowed index exceeded",g=p>=51||!n((function(){var e=[];return e[h]=!1,e.concat()[0]!==e})),w=l("concat"),b=function(e){if(!a(e))return!1;var i=e[h];return void 0!==i?!!i:o(e)},z=!g||!w;s({target:"Array",proto:!0,forced:z},{concat:function(e){var i,t,s,n,o,a=r(this),l=u(a,0),_=0;for(i=-1,s=arguments.length;i<s;i++)if(o=-1===i?a:arguments[i],b(o)){if(n=c(o.length),_+n>m)throw TypeError(f);for(t=0;t<n;t++,_++)t in o&&d(l,_,o[t])}else{if(_>=m)throw TypeError(f);d(l,_++,o)}return l.length=_,l}})}}]);
//# sourceMappingURL=chunk-0cbaae53.b04d41b0.js.map