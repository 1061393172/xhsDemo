/** 以下内容为自动生成，请勿手动修改 */

module.exports = {
  data: {
    page_data_0: "",

    page_data_1: "",

    page_data_2: "",

    page_data_3: "",

    page_data_4: "",

    page_data_5: false,

    page_data_6: false,

    page_data_7: false,

    page_data_8: "",

    page_data_9: false,

    page_data_10: false,

    page_data_11: false,

    page_data_12: "",
  },

  page_fun_1(e) {
    this.setData("page_data_0", e.detail.value);
  },

  page_fun_2(e) {
    this.setData("page_data_1", e.detail.value);
  },

  page_fun_3(e) {
    this.setData("page_data_2", e.detail.value);
  },

  page_fun_4(e) {
    this.setData("page_data_3", e.detail.value);
  },

  page_fun_5(e) {
    this.setData("page_data_4", e.detail.value);
  },

  page_fun_0() {
    this.setData({
      page_data_5: false,
      page_data_6: false,
      page_data_7: false,
    });

    xhs.showToast({
      success: (res) => {
        console.log("success", res);
        this.setData({
          page_data_5: true,
          page_data_8: JSON.stringify(res),
        });
      },
      fail: (res) => {
        console.log("fail", res);
        this.setData({
          page_data_6: true,
          page_data_8: JSON.stringify(res),
        });
      },
      complete: (res) => {
        console.log("complete", res);
        this.setData({
          page_data_7: true,
        });
      },
      title: this.data.page_data_0,
      icon: this.data.page_data_1,
      image: this.data.page_data_2,
      duration: this.data.page_data_3,
      mask: this.data.page_data_4,
    });
  },

  page_fun_6() {
    this.setData({
      page_data_9: false,
      page_data_10: false,
      page_data_11: false,
    });

    xhs.hideToast({
      success: (res) => {
        console.log("success", res);
        this.setData({
          page_data_9: true,
          page_data_12: JSON.stringify(res),
        });
      },
      fail: (res) => {
        console.log("fail", res);
        this.setData({
          page_data_10: true,
          page_data_12: JSON.stringify(res),
        });
      },
      complete: (res) => {
        console.log("complete", res);
        this.setData({
          page_data_11: true,
        });
      },
    });
  },
};
