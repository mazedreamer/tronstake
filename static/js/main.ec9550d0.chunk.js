(window.webpackJsonp = window.webpackJsonp || []).push([
    [0], {
        103: function(a, e) {},
        104: function(a, e) {},
        208: function(a, e, t) {
            "use strict";
            t.r(e);
            var n = t(0),
                i = t.n(n),
                l = t(53),
                o = t.n(l),
                s = (t(65), t(54)),
                c = t(3),
                m = t.n(c),
                r = t(10),
                d = t(55),
                p = t(56),
                u = t(58),
                y = t(57),
                f = t(59),
                h = (t(68), t(24), t(74), t(76), t(77), {
                    tronWeb: !1,
                    contract: !1,
                    setTronWeb: function(a) {
                        this.tronWeb = a, this.contract = a.contract([{"inputs":[{"internalType":"contract ITRC20","name":"THT_address","type":"address","value":"TJUg3kbvRbY8NEFDsMNscMs15ZGGQs3yRD"},{"internalType":"address payable","name":"developerAddr","type":"address","value":"TEFujFZMV6duBRUuzNzXoQsUSQMQSfx6nK"}],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[],"name":"BuyToken","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"THT","outputs":[{"internalType":"contract ITRC20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"THTperTRXPrice","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_minDepositSize","type":"uint256"},{"internalType":"uint256","name":"_THTminDepositSize","type":"uint256"},{"internalType":"uint256","name":"_alow","type":"uint256"},{"internalType":"uint256","name":"_THTperTRXPrice","type":"uint256"},{"internalType":"uint256","name":"_minuteRate","type":"uint256"},{"internalType":"uint256","name":"_multi","type":"uint256"}],"name":"UserInfo","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"alow","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approveToken","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_affAddr","type":"address"}],"name":"buyTHTtoken","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"commissionDivisor","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_affAddr","type":"address"}],"name":"deposit","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"getContractBalance","outputs":[{"internalType":"uint256","name":"cBal","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getContractStat","outputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_addr","type":"address"}],"name":"getProfit","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"gettokenBalance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getusertokenBalance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"multi","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"players","outputs":[{"internalType":"uint256","name":"trxDeposit","type":"uint256"},{"internalType":"uint256","name":"time","type":"uint256"},{"internalType":"uint256","name":"j_time","type":"uint256"},{"internalType":"uint256","name":"interestProfit","type":"uint256"},{"internalType":"uint256","name":"affRewards","type":"uint256"},{"internalType":"uint256","name":"payoutSum","type":"uint256"},{"internalType":"address","name":"affFrom","type":"address"},{"internalType":"uint256","name":"td_team","type":"uint256"},{"internalType":"uint256","name":"td_business","type":"uint256"},{"internalType":"uint256","name":"reward_earned","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"preferals","outputs":[{"internalType":"address","name":"player_addr","type":"address"},{"internalType":"uint256","name":"aff1sum","type":"uint256"},{"internalType":"uint256","name":"aff2sum","type":"uint256"},{"internalType":"uint256","name":"aff3sum","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"reinvest","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"totalInvested","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalPayout","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalPlayers","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalRefDistributed","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"}]
                        , "TRHomGdRmRZwsSdRBvZryAXgfSXpPCPjqw"), console.log("deployed contract instance", this.contract)
                    }
                }),
                E = t(6),
                v = t.n(E),
                g = function(a) {
                    function e(a) {
                        var t;
                        return Object(d.a)(this, e), (t = Object(u.a)(this, Object(y.a)(e).call(this, a))).playerInfo = function(a) {
                            console.log("palyer address", a), h.contract.players(a).call(0, function(a, e) {
                                if (a) console.log(a);
                                else {
                                    console.log("player_info", e);
                                    var n = e.trxDeposit._hex;
                                    n = parseInt(n, 16), n /= 1e6;
                                    var i = parseInt(e.payoutSum._hex, 16) / 1e6,
                                        l = parseInt(e.affRewards._hex, 16) / 1e6;
                                    t.setState({
                                        player_referral: l
                                    }), t.setState({
                                        payout_sum: i
                                    }), t.setState({
                                        player_total_investment: n
                                    })
                                }
                            })
                        }, t.total_player = function() {
                            var a = this;
                            h.contract.totalPlayers().call(0, function(e, t) {
                                if (e) console.log(e);
                                else {
                                    var n = parseInt(t._hex, 16);
                                    a.setState({
                                        total_team: n
                                    })
                                }
                            })
                        }, t.getProfit = function(a) {
                            var e = this;
                            h.contract.getProfit(a).call(0, function(a, t) {
                                if (a) console.log(a);
                                else {
                                    var n = parseInt(t._hex, 16);
                                    e.setState({
                                        total_profit: n
                                    })
                                }
                            })
                        }, t.getReferral = function(a) {
                            var e = this;
                            h.contract.preferals(a).call(0, function(a, t) {
                                a ? console.log(a) : (console.log("all referrals", t), console.log("all referrals", t.aff1sum._hex), e.setState({
                                    L1: parseInt(t.aff1sum._hex, 16)
                                }), e.setState({
                                    L2: parseInt(t.aff2sum._hex, 16)
                                }), e.setState({
                                    L3: parseInt(t.aff3sum._hex, 16)
                                }))
                            })
                        }, t.totalInvested = function() {
                            var a = this;
                            h.contract.totalInvested().call(0, function(e, t) {
                                if (e) console.log(e);
                                else {
                                    var n = parseInt(t._hex, 16) / 1e6;
                                    a.setState({
                                        total_invested: n
                                    }), console.log("totalInvested", n)
                                }
                            })
                        }, t.total_ref_dis = function() {
                            var a = this;
                            h.contract.totalRefDistributed().call(0, function(e, t) {
                                if (e) console.log(e);
                                else {
                                    var n = parseInt(t._hex, 16) / 1e6;
                                    a.setState({
                                        total_ref_reward: n
                                    }), console.log("total_ref_dis", n)
                                }
                            })
                        }, t.onMessageSend = Object(r.a)(m.a.mark(function a() {
                            var e, n, i, l, o, s;
                            return m.a.wrap(function(a) {
                                for (;;) switch (a.prev = a.next) {
                                    case 0:
                                        if (t.setState({
                                                dep_loading: !0
                                            }), e = window.location.search, n = new URLSearchParams(e), i = n.get("ref"), !((l = t.state.value) < 500)) {
                                            a.next = 9;
                                            break
                                        }
                                        return v()({
                                            title: "Minimum deposit is 500 TRX",
                                            type: "error"
                                        }), t.setState({
                                            dep_loading: !1
                                        }), a.abrupt("return", !1);
                                    case 9:
                                        return o = 1e6 * l, console.log("wt", window.tronWeb), s = window.tronWeb.isAddress(i) ? i : t.state.creator, console.log("ref_address", s), a.next = 15, h.contract.deposit(s).send({
                                            shouldPollResponse: !1,
                                            callValue: o
                                        }).then(function(a) {
                                            t.setState({
                                                dep_loading: !1
                                            }), console.log("player address inside deposit promise", t.state.tronlink_address), console.log(a), v()({
                                                title: "Successfully Deposit",
                                                type: "success"
                                            }), setTimeout(function() {
                                                window.location.reload()
                                            }, 2e3)
                                        }).catch(function(a) {
                                            t.setState({
                                                dep_loading: !1
                                            }), console.log(a), v()({
                                                title: "Network Error",
                                                type: "error"
                                            })
                                        });
                                    case 15:
                                    case "end":
                                        return a.stop()
                                }
                            }, a)
                        })), t.reinvest = Object(r.a)(m.a.mark(function a() {
                            return m.a.wrap(function(a) {
                                for (;;) switch (a.prev = a.next) {
                                    case 0:
                                        return t.setState({
                                            rei_loading: !0
                                        }), a.next = 3, h.contract.reinvest().send({
                                            shouldPollResponse: !1
                                        }).then(function(a) {
                                            t.setState({
                                                rei_loading: !1
                                            }), console.log("res here", a), v()({
                                                title: "Successfully Reinvest",
                                                type: "success"
                                            })
                                        }).catch(function(a) {
                                            t.setState({
                                                rei_loading: !1
                                            }), console.log(a), v()({
                                                title: "Network Error",
                                                type: "error"
                                            })
                                        });
                                    case 3:
                                    case "end":
                                        return a.stop()
                                }
                            }, a)
                        })), t.withdraw = Object(r.a)(m.a.mark(function a() {
                            return m.a.wrap(function(a) {
                                for (;;) switch (a.prev = a.next) {
                                    case 0:
                                        return t.setState({
                                            wit_loading: !0
                                        }), a.next = 3, h.contract.withdraw().send({
                                            shouldPollResponse: !1
                                        }).then(function(a) {
                                            console.log("player address inside withdraw promise", t.state.tronlink_address), t.getProfit(t.state.tronlink_address), console.log(a), t.setState({
                                                wit_loading: !1
                                            }), v()({
                                                title: "Successfully Withdraw",
                                                type: "success"
                                            })
                                        }).catch(function(a) {
                                            t.setState({
                                                wit_loading: !1
                                            }), console.log(a), v()({
                                                title: "Network Error",
                                                type: "error"
                                            })
                                        });
                                    case 3:
                                    case "end":
                                        return a.stop()
                                }
                            }, a)
                        })), t.withdraw_principal = Object(r.a)(m.a.mark(function a() {
                            return m.a.wrap(function(a) {
                                for (;;) switch (a.prev = a.next) {
                                    case 0:
                                        return a.next = 2, h.contract.withdraw_capital().send({
                                            shouldPollResponse: !1
                                        }).then(function(a) {
                                            v()({
                                                title: "Successfully Withdraw",
                                                type: "success"
                                            }), setTimeout(function() {
                                                window.location.reload()
                                            }, 2e3)
                                        }).catch(function(a) {
                                            t.setState({
                                                wit_loading: !1
                                            }), console.log(a), v()({
                                                title: "Network Error",
                                                type: "error"
                                            })
                                        });
                                    case 2:
                                    case "end":
                                        return a.stop()
                                }
                            }, a)
                        })), t.copyCodeToClipboard = function() {
                            t.textArea.select(), document.execCommand("copy")
                        }, t.state = {
                            dep_loading: !1,
                            rei_loading: !1,
                            wit_loading: !1,
                            loading: !1,
                            player_total_investment: "0",
                            total_invested: "0",
                            total_team: "0",
                            payout_sum: "0",
                            total_ref_reward: "0",
                            player_referral: "0",
                            value: "",
                            total_profit: "",
                            creator: "TEFujFZMV6duBRUuzNzXoQsUSQMQSfx6nK",
                            tronlink_address: "",
                            ref_link: "https://tron-holding.com?ref=TEFujFZMV6duBRUuzNzXoQsUSQMQSfx6nK",
                            tronWeb: {
                                installed: !1,
                                loggedIn: !1
                            },
                            wallet_balance: "",
                            account: "",
                            balance: 0,
                            reward_earned: "0",
                            player_ref_count: "0",
                            L1: "0",
                            L2: "0",
                            L3: "0"
                        }, t
                    }
                    return Object(f.a)(e, a), Object(p.a)(e, [{
                        key: "componentWillMount",
                        value: function() {
                            var a = Object(r.a)(m.a.mark(function a() {
                                var e, t = this;
                                return m.a.wrap(function(a) {
                                    for (;;) switch (a.prev = a.next) {
                                        case 0:
                                            e = setInterval(Object(r.a)(m.a.mark(function a() {
                                                var n, i, l;
                                                return m.a.wrap(function(a) {
                                                    for (;;) switch (a.prev = a.next) {
                                                        case 0:
                                                            if (!window.tronWeb || !window.tronWeb.ready) {
                                                                a.next = 18;
                                                                break
                                                            }
                                                            return clearInterval(e), h.setTronWeb(window.tronWeb), a.next = 5, window.tronWeb.trx.getAccount();
                                                        case 5:
                                                            n = a.sent, i = n.balance / 1e6, t.setState({
                                                                wallet_balance: i
                                                            }), l = window.tronWeb.defaultAddress.base58, console.log("tl_address", l), t.playerInfo(l), t.getProfit(l), t.getReferral(l), t.setState({
                                                                tronlink_address: l
                                                            }), t.setState({
                                                                ref_link: "https://tron-holding.com/?ref=" + l
                                                            }), t.totalInvested(), t.total_player(), t.total_ref_dis();
                                                        case 18:
                                                        case "end":
                                                            return a.stop()
                                                    }
                                                }, a)
                                            })), 10), setInterval(function() {
                                                t.getProfit(t.state.tronlink_address)
                                            }, 2e3);
                                        case 2:
                                        case "end":
                                            return a.stop()
                                    }
                                }, a)
                            }));
                            return function() {
                                return a.apply(this, arguments)
                            }
                        }()
                    }, {
                        key: "render",
                        value: function() {
                            var a = this;
                            this.state.dep_loading, this.state.rei_loading, this.state.wit_loading;
                            return i.a.createElement("div", null, i.a.createElement("div", {
                                id: "loader-wrapper"
                            }, i.a.createElement("div", {
                                id: "loading-center-absolute"
                            }, i.a.createElement("div", {
                                className: "object",
                                id: "object_four"
                            }), i.a.createElement("div", {
                                className: "object",
                                id: "object_three"
                            }), i.a.createElement("div", {
                                className: "object",
                                id: "object_two"
                            }), i.a.createElement("div", {
                                className: "object",
                                id: "object_one"
                            })), i.a.createElement("div", {
                                className: "loader-section section-left"
                            }), i.a.createElement("div", {
                                className: "loader-section section-right"
                            })), i.a.createElement("header", {
                                className: "header_wrap fixed-top nav-fixed"
                            }, i.a.createElement("img", {
                                className: "logo_light",
                                src: "assests/images/tron_white.png",
                                alt: "logo"
                            }), i.a.createElement("span", {
                                class: "animation presale_txt text-white"
                            }, i.a.createElement("strong", null, "Tron Holding")), i.a.createElement("div", {
                                className: "container"
                            }, i.a.createElement("nav", {
                                className: "navbar navbar-expand-lg"
                            }, i.a.createElement("a", {
                                className: "navbar-brand page-scroll animation",
                                href: "#home_section",
                                "data-animation": "fadeInDown",
                                "data-animation-delay": "1s"
                            }), i.a.createElement("button", {
                                className: "navbar-toggler animation",
                                type: "button",
                                "data-toggle": "collapse",
                                "data-target": "#navbarSupportedContent",
                                "aria-controls": "navbarSupportedContent",
                                "aria-expanded": "false",
                                "aria-label": "Toggle navigation",
                                "data-animation": "fadeInDown",
                                "data-animation-delay": "1.1s"
                            }, i.a.createElement("span", {
                                className: "ion-android-menu"
                            })), i.a.createElement("div", {
                                className: "collapse navbar-collapse",
                                id: "navbarSupportedContent"
                            }, i.a.createElement("ul", Object(s.a)({
                                style: {
                                    color: "black"
                                },
                                className: "navbar-nav"
                            }, "style", {
                                margin: "0 0 0 auto"
                            }), i.a.createElement("li", {
                                className: "animation",
                                "data-animation": "fadeInDown",
                                "data-animation-delay": "1.4s"
                            }, i.a.createElement("a", {
                                className: "nav-link page-scroll nav_item",
                                href: "https://www.dapp.com/app/tron-holding"
                            }, "Dapp Audit")), i.a.createElement("li", {
                                className: "animation",
                                "data-animation": "fadeInDown",
                                "data-animation-delay": "1.2s"
                            }, i.a.createElement("a", {
                                className: "nav-link page-scroll nav_item",
                                href: "https://dappradar.com/tron/high-risk/tron-holding"
                            }, "Dappradar Audit")), i.a.createElement("li", {
                                className: "animation",
                                "data-animation": "fadeInDown",
                                "data-animation-delay": "1.3s"
                            }, i.a.createElement("a", {
                                className: "nav-link page-scroll nav_item",
                                href: "https://t.me/tronholding_official"
                            }, "Telegram")), i.a.createElement("li", {
                                className: "animation",
                                "data-animation": "fadeInDown",
                                "data-animation-delay": "1.5s"
                            }, i.a.createElement("a", {
                                className: "nav-link page-scroll nav_item",
                                href: "https://tronscan.org/#/contract/TRHomGdRmRZwsSdRBvZryAXgfSXpPCPjqw"
                            }, "Smart Contract")), i.a.createElement("li", {
                                className: "animation",
                                "data-animation": "fadeInDown",
                                "data-animation-delay": "1.5s"
                            }, i.a.createElement("a", {
                                className: "nav-link page-scroll nav_item",
                                href: "https://tron-holding.com/#invest"
                            }, "Stake Tron")),i.a.createElement("li", {
                                className: "animation",
                                "data-animation": "fadeInDown",
                                "data-animation-delay": "1.5s"
                            }, i.a.createElement("a", {
                                className: "nav-link page-scroll nav_item",
                                href: "https://tron-holding.com/StakeTHT"
                            }, "Stake THT")),i.a.createElement("li", {
                                className: "animation",
                                "data-animation": "fadeInDown",
                                "data-animation-delay": "1.5s"
                            }, i.a.createElement("a", {
                                className: "nav-link page-scroll nav_item",
                                href: "https://tron-holding.com/BuyTHT"
                            }, "Buy THT")), i.a.createElement("li", {
                                className: "animation",
                                "data-animation": "fadeInDown",
                                "data-animation-delay": "1.7s"
                            }, i.a.createElement("a", {
                                className: "nav-link page-scroll nav_item",
                                href: "#faq"
                            }, "FAQ"))))))), i.a.createElement("section", {
                                id: "home_section",
                                className: "section_banner section_gradiant small_pb",
                                "data-z-index": 1,
                                "data-parallax": "scroll",
                                "data-image-src": "assests/images/banner_bg3.png"
                            }, i.a.createElement("div", {
                                className: "container"
                            }, i.a.createElement("div", {
                                className: "row align-items-center"
                            }, i.a.createElement("div", {
                                className: "col-lg-6 col-md-12 col-sm-12 order-lg-first"
                            }, i.a.createElement("div", {
                                className: "banner_text_s2 text_md_center"
                            }, i.a.createElement("h1", {
                                className: "animation presale_txt text-white",
                                "data-animation": "fadeInUp",
                                "data-animation-delay": "1.1s"
                            }, i.a.createElement("strong", null, "Tron Holding DeFi"), "  "), i.a.createElement("h5", {
                                id: "demo",
                                className: "animation presale_txt text-white",
                                "data-animation": "fadeInUp",
                                "data-animation-delay": "1.3s"
                            }, i.a.createElement("strong", null, " "), "  "), i.a.createElement("h3", {
                                    className: "animation head_sale_txt text-warning",
                                    "data-animation": "fadeInUp",
                                    "data-animation-delay": "1.3s"
                                },
                                "Stake TRX = 2% TRX Daily"),i.a.createElement("h3", {
                                    className: "animation head_sale_txt text-warning",
                                    "data-animation": "fadeInUp",
                                    "data-animation-delay": "1.3s"
                                },
                                "10% Free Tron Holding Token (THT) in your wallet instantly"), i.a.createElement("h3", {
                                    className: "animation presale_txt text-success",
                                    "data-animation": "fadeInUp",
                                    "data-animation-delay": "1.3s"
                                },
                                " 20% Referral Rewards"), i.a.createElement("h3", {
                                style: {
                                    fontSize: "23px"
                                },
                                className: "animation head_sale_txt text-warning",
                                "data-animation": "fadeInUp",
                                "data-animation-delay": "1.3s"
                            }, "Stake THT = 5% THT Daily"),i.a.createElement("p", {
                                style: {
                                    fontSize: "23px"
                                },
                                className: "animation head_sale_txt text-warning",
                                "data-animation": "fadeInUp",
                                "data-animation-delay": "1.3s"
                            }, " "), i.a.createElement("a", {
                                href: "#invest",
                                target: "_blank",
                                className: "btn btn-default btn-radius video animation",
                                "data-animation": "fadeInUp",
                                "data-animation-delay": "1s"
                            }, "Stake TRX"), i.a.createElement("a", {
                                href: "https://tron-holding.com/StakeTHT/",
                                target: "_blank",
                                className: "btn btn-default btn-radius video animation",
                                "data-animation": "fadeInUp",
                                "data-animation-delay": "1s"
                            }, "Stake THT"),i.a.createElement("a", {
                                href: "https://tron-holding.com/BuyTHT/",
                                target: "_blank",
                                className: "btn btn-default btn-radius video animation",
                                "data-animation": "fadeInUp",
                                "data-animation-delay": "1s"
                            }, "Buy THT"), i.a.createElement("div", {
                                className: "btn_group pt-2 pb-3 animation",
                                "data-animation": "fadeInUp",
                                "data-animation-delay": "1.4s"
                            }))), i.a.createElement("div", {
                                className: "col-lg-6 col-md-12 col-sm-12 order-first"
                            }, i.a.createElement("div", {
                                className: "banner_image_right res_md_mb_50 res_xs_mb_30 animation",
                                "data-animation-delay": "1.5s",
                                "data-animation": "fadeInRight"
                            }, i.a.createElement("img", {
                                style: {
                                    marginBottom: "8%"
                                },
                                alt: "banner_vector2",
                                src: "assests/images/inner-hero-mobile.png"
                            })))), i.a.createElement("div", {
                                className: "divider small_divider"
                            }), i.a.createElement("div", {
                                className: "row"
                            }, i.a.createElement("div", {
                                className: "col-lg-12"
                            }, i.a.createElement("div", {
                                className: "token_rtinfo bg-white-tran box_shadow_none border_right m-0"
                            }, i.a.createElement("div", {
                                className: "row text-center"
                            }, i.a.createElement("div", {
                                className: "col-lg-3 col-md-4 col-6"
                            }, i.a.createElement("div", {
                                className: "token_rt_value token_value_white animation animated fadeInUp",
                                "data-animation": "fadeInUp",
                                "data-animation-delay": "0.2s",
                                style: {
                                    animationDelay: "0.2s",
                                    opacity: 1
                                }
                            }, i.a.createElement("h3", null, this.state.total_invested), i.a.createElement("p", null, "Total Invested"))), i.a.createElement("div", {
                                className: "col-lg-3 col-md-4 col-6"
                            }, i.a.createElement("div", {
                                className: "token_rt_value token_value_white animation animated fadeInUp",
                                "data-animation": "fadeInUp",
                                "data-animation-delay": "0.4s",
                                style: {
                                    animationDelay: "0.4s",
                                    opacity: 1
                                }
                            }, i.a.createElement("h3", null, this.state.total_team), i.a.createElement("p", null, "Total Community"))), i.a.createElement("div", {
                                className: "col-lg-3 col-md-4 col-6"
                            }, i.a.createElement("div", {
                                className: "token_rt_value token_value_white animation animated fadeInUp",
                                "data-animation": "fadeInUp",
                                "data-animation-delay": "0.6s",
                                style: {
                                    animationDelay: "0.6s",
                                    opacity: 1
                                }
                            }, i.a.createElement("h3", null, parseInt(this.state.total_ref_reward)), i.a.createElement("p", null, "Total Referral Bonus"))), i.a.createElement("div", {
                                className: "col-lg-3 col-md-4 col-6"
                            }, i.a.createElement("div", {
                                className: "token_rt_value token_value_white animation animated fadeInUp",
                                "data-animation": "fadeInUp",
                                "data-animation-delay": "0.8s",
                                style: {
                                    animationDelay: "0.8s",
                                    opacity: 1
                                }
                            }, i.a.createElement("h3", null, this.state.wallet_balance), i.a.createElement("p", null, "Wallet Balance"))))))))), i.a.createElement("section", {
                                id: "about",
                                className: "small_pt small_pb"
                            }, i.a.createElement("div", {
                                className: "container"
                            }, i.a.createElement("div", {
                                className: "row align-items-center"
                            }, i.a.createElement("div", {
                                className: "col-lg-6 col-md-12 col-sm-12"
                            }, i.a.createElement("div", {
                                className: "text-center"
                            }, i.a.createElement("img", {
                                className: "animation",
                                "data-animation": "zoomIn",
                                "data-animation-delay": "0.2s",
                                src: "assests/images/mark-image.png",
                                alt: "aboutimg3"
                            })), i.a.createElement("div", {
                                className: "chart_icon text-center"
                            }, i.a.createElement("img", {
                                className: "animation",
                                "data-animation": "zoomIn",
                                "data-animation-delay": "0.2s",
                                src: "assests/images/chart_icon.png",
                                alt: "aboutimg3"
                            }))), i.a.createElement("div", {
                                className: "col-lg-6 col-md-12 col-sm-12 res_md_mt_30 res_sm_mt_20"
                            }, i.a.createElement("div", {
                                style: {
                                    color: "white"
                                },
                                className: "title_default_light title_border"
                            }, i.a.createElement("h4", {
                                className: "animation",
                                "data-animation": "fadeInUp",
                                "data-animation-delay": "0.2s"
                            }, "About Tron Holding"), i.a.createElement("p", {
                                className: "animation",
                                "data-animation": "fadeInUp",
                                "data-animation-delay": "0.4s"
                            }, "Tron Holding is a Defi project for Tron network and its 100% decentralized with Verified and open source smart contract on Tron blockchain. Tron Holding generates 2% lifetime dividends per day in Tron Staking Plan based on your investment and you will get 10% of your investment as Tron Holding Token (THT) directly in your wallet, For example if you invest 1000 trx, you will recieve 100 free THT instantly and 20 Trx per day. The dividends generate every second and you can withdraw or reinvest your dividends whenever you want. When you reinvest, the total investment would increase and you will get more dividends, also you can buy Tron Holding Token (THT) and stake it to earn 5% THT per day, Tron Holding Token Price is 2 trx now and it will list in Exchanges after our community reach to 1,000,000 and that time THT price will be much much more than 2 trx, so don't miss it. there is 3 levels of Referral in Trx Plan up to 20% rewards instantly come out of the smart contract into your main wallet, so you can earn lots of profit by making team. Join Tron Holding community now and let's grow it together to benefit all community. ")), i.a.createElement("a", {
                                href: "https://tronscan.org/#/contract/TRHomGdRmRZwsSdRBvZryAXgfSXpPCPjqw",
                                target: "_blank",
                                className: "btn btn-secondary btn-radius video animation",
                                "data-animation": "fadeInUp",
                                "data-animation-delay": "1s"
                            }, "Contract"), i.a.createElement("a", {
                                href: "https://t.me/tronholding_official",
                                target: "_blank",
                                className: "btn btn-secondary btn-radius video animation",
                                "data-animation": "fadeInUp",
                                "data-animation-delay": "1s"
                            }, "Telegram"), i.a.createElement("a", {
                                href: "https://t.me/tron_holding",
                                target: "_blank",
                                className: "btn btn-secondary btn-radius video animation",
                                "data-animation": "fadeInUp",
                                "data-animation-delay": "1s"
                            }, "Group")   )))), i.a.createElement("section", {
                                className: "section_banner section_gradiantt small_pb",
                                "data-z-index": 1,
                                "data-parallax": "scroll",
                                "data-image-src": "assests/images/banner_bg3.png",
                                style: {
                                    padding: "70px 0"
                                }
                            }, i.a.createElement("div", {
                                className: "container"
                            }, i.a.createElement("div", {
                                className: "row"
                            }, i.a.createElement("div", {
                                className: "col-lg-6 offset-lg-3 col-md-12 col-sm-12"
                            }, i.a.createElement("div", {
                                className: "title_default_light title_border text-center"
                            }, i.a.createElement("h3", {
                                className: "animation text-white animated fadeInUp",
                                "data-animation": "fadeInUp",
                                "data-animation-delay": "0.2s"
                            }, "Welcome to Tron Holding earning TRX program"),i.a.createElement("img", {
                                src: "assests/images/staketrx.png",
                                style: {
                                    marginBottom: "20px"
                                }
                            }), i.a.createElement("p", {
                                className: "animation",
                                "data-animation": "fadeInUp",
                                "data-animation-delay": "0.4s"
                            }, "Stake Tron and earn every second, invite your friends and earn lots of rewards")))), i.a.createElement("div", {
                                className: "row"
                            }, i.a.createElement("div", {
                                id: "invest" ,
                                className: "col-lg-6 col-md-12 col-sm-12"
                            }, i.a.createElement("div", {
                                className: "tk_countdown text-center animation token_countdown_bg animated fadeIn",
                                "data-animation": "fadeIn",
                                "data-animation-delay": "1s",
                                style: {
                                    animationDelay: "1s",
                                    opacity: 1
                                }
                            }, i.a.createElement("div", {
                                className: "tk_counter_inner"
                            }, i.a.createElement("h3", {
                                className: "animation text-white animated fadeInUp",
                                "data-animation": "fadeInUp",
                                "data-animation-delay": "1.3s",
                                style: {
                                    animationDelay: "1.3s",
                                    opacity: 1
                                }
                            }, "Invest TRX"), i.a.createElement("p", {
                                
                                style: {
                                    color: "#fede41",
                                    marginBottom: "10px",
                                    fontWeight: 700
                                }
                            }, "Minimum Investment : 500 Trx"), i.a.createElement("form", {
                                className: "field_form"
                            }, i.a.createElement("div", {
                                className: "form-group col-md-12 animation animated fadeInUp",
                                "data-animation": "fadeInUp",
                                "data-animation-delay": "0.4s",
                                style: {
                                    animationDelay: "0.4s",
                                    opacity: 1,
                                    marginBottom: 0
                                }
                            }, i.a.createElement("input", {
                                value: this.state.value,
                                onChange: function(e) {
                                    return a.setState({
                                        value: e.target.value
                                    })
                                },
                                type: "text",
                                required: "required",
                                placeholder: "Enter Trx amount",
                                id: "first-name",
                                className: "form-control",
                                name: "name"
                            }))), i.a.createElement("a", {
                                href: "#",
                                onClick: this.onMessageSend,
                                className: "btn btn-default btn-radius animation animated fadeInUp",
                                "data-animation": "fadeInUp",
                                "data-animation-delay": "1.4s",
                                style: {
                                    animationDelay: "1.4s",
                                    opacity: 1
                                }
                            }, "Invest ", i.a.createElement("i", {
                                className: "ion-ios-arrow-thin-right"
                            })), i.a.createElement("p", {
                                style: {
                                    color: "#fede41",
                                    marginBottom: 0,
                                    fontWeight: 300
                                }
                            }, " Make sure to have 50-100 Trx more in your wallet for transaction fee ( if there was enough energy in contract's energy, your transaction will be free )")))), i.a.createElement("div", {
                                className: "col-lg-6 col-md-12 col-sm-12"
                            }, i.a.createElement("div", {
                                className: "tk_countdown text-center animation token_countdown_bg animated fadeIn",
                                "data-animation": "fadeIn",
                                "data-animation-delay": "1s",
                                style: {
                                    animationDelay: "1s",
                                    opacity: 1,
                                    height: "307px"
                                }
                            }, i.a.createElement("div", {
                                className: "tk_counter_inner"
                            }, i.a.createElement("h3", {
                                className: "animation text-white animated fadeInUp",
                                "data-animation": "fadeInUp",
                                "data-animation-delay": "1.3s",
                                style: {
                                    animationDelay: "1.3s",
                                    opacity: 1
                                }
                            }, "Available To Withdraw"), i.a.createElement("h5", {
                                style: {
                                    color: "#fede41",
                                    marginBottom: 0,
                                    fontWeight: 800,
                                    fontSize: "28px"
                                }
                            }, this.state.total_profit / 1e6, " TRX"), i.a.createElement("a", {
                                onClick: this.reinvest,
                                href: "#",
                                className: "btn btn-default btn-radius animation animated fadeInUp",
                                "data-animation": "fadeInUp",
                                "data-animation-delay": "1.4s",
                                style: {
                                    animationDelay: "1.4s",
                                    opacity: 1
                                }
                            }, "Reinvest ", i.a.createElement("i", {
                                className: "ion-ios-arrow-thin-right"
                            })), i.a.createElement("a", {
                                onClick: this.withdraw,
                                href: "#",
                                className: "btn btn-default btn-radius animation animated fadeInUp",
                                "data-animation": "fadeInUp",
                                "data-animation-delay": "1.4s",
                                style: {
                                    animationDelay: "1.4s",
                                    opacity: 1
                                }
                            }, "Withdraw ", i.a.createElement("i", {
                                className: "ion-ios-arrow-thin-right"
                            })), i.a.createElement("p", {
                                style: {
                                    color: "#fede41",
                                    marginBottom: 0,
                                    fontWeight: 300
                                }
                            }, " Make sure to have atleast 50 Trx in your wallet for transaction fee ")))), i.a.createElement("div", {
                                className: "col-lg-6 col-md-12 col-sm-12"
                            }, i.a.createElement("div", {
                                className: "tk_countdown text-center animation token_countdown_bg animated fadeIn",
                                "data-animation": "fadeIn",
                                "data-animation-delay": "1s",
                                style: {
                                    animationDelay: "1s",
                                    opacity: 1,
                                    height: "324px"
                                }
                            }, i.a.createElement("div", {
                                className: "tk_counter_inner"
                            }, i.a.createElement("h3", {
                                className: "animation text-white animated fadeInUp",
                                "data-animation": "fadeInUp",
                                "data-animation-delay": "1.3s",
                                style: {
                                    animationDelay: "1.3s",
                                    opacity: 1
                                }
                            }, "Referral Link"), i.a.createElement("p", {
                                style: {
                                    color: "#fede41",
                                    marginBottom: "10px",
                                    fontWeight: 700
                                }
                            }, "Copy this link and send it to your friends to earn 20% referral rewards"), i.a.createElement("form", {
                                className: "field_form"
                            }, i.a.createElement("div", {
                                className: "form-group col-md-12 animation animated fadeInUp",
                                "data-animation": "fadeInUp",
                                "data-animation-delay": "0.4s",
                                style: {
                                    animationDelay: "0.4s",
                                    opacity: 1
                                }
                            }, i.a.createElement("input", {
                                ref: function(e) {
                                    return a.textArea = e
                                },
                                value: this.state.ref_link,
                                type: "text",
                                required: "required",
                                placeholder: "Link*",
                                id: "Text1",
                                className: "form-control",
                                name: "name"
                            }))), i.a.createElement("a", {
                                onClick: function() {
                                    return a.copyCodeToClipboard()
                                },
                                href: "#",
                                className: "btn btn-default btn-radius animation animated fadeInUp",
                                "data-animation": "fadeInUp",
                                "data-animation-delay": "1.4s",
                                style: {
                                    animationDelay: "1.4s",
                                    opacity: 1
                                }
                            }, "Copy Link ", i.a.createElement("i", {
                                className: "ion-ios-arrow-thin-right"
                            }))))), i.a.createElement("div", {
                                className: "col-lg-6 col-md-12 col-sm-12"
                            }, i.a.createElement("div", {
                                className: "tk_countdown animation token_countdown_bg animated fadeIn",
                                "data-animation": "fadeIn",
                                "data-animation-delay": "1s",
                                style: {
                                    animationDelay: "1s",
                                    opacity: 1,
                                    height: "87%"
                                }
                            }, i.a.createElement("div", {
                                className: "tk_counter_inner"
                            }, i.a.createElement("h3", {
                                className: "animation text-white animated fadeInUp",
                                "data-animation": "fadeInUp",
                                "data-animation-delay": "1.3s",
                                style: {
                                    animationDelay: "1.3s",
                                    opacity: 1,
                                    marginBottom: "10px",
                                    textAlign: "center"
                                }
                            }, "My Statistics"), i.a.createElement("table", {
                                className: "table table-blue m-0 h-100"
                            }, i.a.createElement("tbody", null, i.a.createElement("tr", {
                                className: "animation animated fadeInUp",
                                "data-animation": "fadeInUp",
                                "data-animation-delay": "0.2s",
                                style: {
                                    animationDelay: "0.2s",
                                    opacity: 1
                                }
                            }, i.a.createElement("td", null, "My Investments"), i.a.createElement("td", null, this.state.player_total_investment)), i.a.createElement("tr", {
                                className: "animation animated fadeInUp",
                                "data-animation": "fadeInUp",
                                "data-animation-delay": "0.3s",
                                style: {
                                    animationDelay: "0.3s",
                                    opacity: 1
                                }
                            }, i.a.createElement("td", null, "My Withdrawals"), i.a.createElement("td", null, this.state.payout_sum)), i.a.createElement("tr", {
                                className: "animation animated fadeInUp",
                                "data-animation": "fadeInUp",
                                "data-animation-delay": "0.4s",
                                style: {
                                    animationDelay: "0.4s",
                                    opacity: 1
                                }
                            }, i.a.createElement("td", null, " My Referral Bonus"), i.a.createElement("td", null, this.state.player_referral))))), i.a.createElement("section", {
                                className: "client_logo small_pt small_pb"
                            }, i.a.createElement("h3", {
                                className: "title_default_light title_border text-center"
                            }, i.a.createElement("p", null, "My team"), i.a.createElement("div", {
                                className: "row align-items-center text-center overflow_hide small_space"
                            }, i.a.createElement("div", {
                                className: "col-md-2"
                            }), i.a.createElement("div", {
                                className: "col-lg-8 col-md-6"
                            }, i.a.createElement("div", {
                                className: "token_info_table_s2 h-100"
                            }, i.a.createElement("table", {
                                className: "table table-blue m-0 h-100"
                            }, i.a.createElement("tbody", null, i.a.createElement("tr", {
                                className: "animation animated fadeInUp",
                                "data-animation": "fadeInUp",
                                "data-animation-delay": "0.2s",
                                style: {
                                    animationDelay: "0.2s",
                                    opacity: 1
                                }
                            }, i.a.createElement("td", null, "Level  1"), i.a.createElement("td", null, "15%"), i.a.createElement("td", null, this.state.L1)), i.a.createElement("tr", {
                                className: "animation animated fadeInUp",
                                "data-animation": "fadeInUp",
                                "data-animation-delay": "0.3s",
                                style: {
                                    animationDelay: "0.3s",
                                    opacity: 1
                                }
                            }, i.a.createElement("td", null, "Level  2"), i.a.createElement("td", null, "3%"), i.a.createElement("td", null, this.state.L2)), i.a.createElement("tr", {
                                className: "animation animated fadeInUp",
                                "data-animation": "fadeInUp",
                                "data-animation-delay": "0.3s",
                                style: {
                                    animationDelay: "0.3s",
                                    opacity: 1
                                }
                            }, i.a.createElement("td", null, "Level  3"), i.a.createElement("td", null, "2%"), i.a.createElement("td", null, this.state.L3)))))), i.a.createElement("div", {
                                className: "col-md-2"
                            }))))))))), i.a.createElement("section", {
                                id: "how_it_work",
                                className: "small_pt"
                            }, i.a.createElement("div", {
                                className: "container"
                            }, i.a.createElement("div", {
                                className: "row"
                            }, i.a.createElement("div", {
                                className: "col-lg-4"
                            }, i.a.createElement("div", {
                                className: "title_default_light title_border"
                            }, i.a.createElement("h4", {
                                className: "animation",
                                "data-animation": "fadeInUp",
                                "data-animation-delay": "0.2s"
                            }, "Why Tron Holding"), i.a.createElement("p", {
                                className: "animation",
                                "data-animation": "fadeInUp",
                                "data-animation-delay": "0.4s"
                            }, "Tron Holding is Safe and Profitable. when you invest, you have 3 advantages, 2% daily trx ROI, 10% free THT token and the opportunity to invite others to collect more profits, Everyone can have an honest income in Tron Holding system, Join us now and help to make a big community together"))), i.a.createElement("div", {
                                className: "col-lg-8"
                            }, i.a.createElement("div", {
                                className: "row"
                            }, i.a.createElement("div", {
                                className: "col-lg-6"
                            }, i.a.createElement("div", {
                                className: "work_box res_md_mt_20"
                            }, i.a.createElement("div", {
                                className: "work_icon animation",
                                "data-animation": "fadeInUp",
                                "data-animation-delay": "0.2s"
                            }, i.a.createElement("i", {
                                className: "ion ion-chatboxes"
                            })), i.a.createElement("div", {
                                className: "work_inner"
                            }, i.a.createElement("h4", {
                                className: "animation",
                                "data-animation": "fadeInUp",
                                "data-animation-delay": "0.3s"
                            }, "Decentralized System"), i.a.createElement("p", {
                                className: "animation",
                                "data-animation": "fadeInUp",
                                "data-animation-delay": "0.4s"
                            }, "Tron Holding is running on the Tron blockchain ecosystem and it is 100% decentralized")))), i.a.createElement("div", {
                                className: "col-lg-6"
                            }, i.a.createElement("div", {
                                className: "work_box res_md_mt_20"
                            }, i.a.createElement("div", {
                                className: "work_icon animation",
                                "data-animation": "fadeInUp",
                                "data-animation-delay": "0.2s"
                            }, i.a.createElement("i", {
                                className: "ion ion-android-globe"
                            })), i.a.createElement("div", {
                                className: "work_inner"
                            }, i.a.createElement("h4", {
                                className: "animation",
                                "data-animation": "fadeInUp",
                                "data-animation-delay": "0.3s"
                            }, "Global Opportunity"), i.a.createElement("p", {
                                className: "animation",
                                "data-animation": "fadeInUp",
                                "data-animation-delay": "0.4s"
                            }, "It accepts TRON Standard as its trading cryptocurrency, hence it can be operated from around the world")))), i.a.createElement("div", {
                                className: "col-lg-6"
                            }, i.a.createElement("div", {
                                className: "work_box mt-4"
                            }, i.a.createElement("div", {
                                className: "work_icon animation",
                                "data-animation": "fadeInUp",
                                "data-animation-delay": "0.2s"
                            }, i.a.createElement("i", {
                                className: "ion ion-thumbsup"
                            })), i.a.createElement("div", {
                                className: "work_inner"
                            }, i.a.createElement("h4", {
                                className: "animation",
                                "data-animation": "fadeInUp",
                                "data-animation-delay": "0.3s"
                            }, "Guaranteed Success"), i.a.createElement("p", {
                                className: "animation",
                                "data-animation": "fadeInUp",
                                "data-animation-delay": "0.4s"
                            }, "Tron Holding has a Verified and Open Source smart contract on Tron blockchain, smart contracts are a part of Blockchain technology. Blockchain is a secure technology that no hacker can access")))), i.a.createElement("div", {
                                className: "col-lg-6"
                            }, i.a.createElement("div", {
                                className: "work_box mt-4"
                            }, i.a.createElement("div", {
                                className: "work_icon animation",
                                "data-animation": "fadeInUp",
                                "data-animation-delay": "0.2s"
                            }, i.a.createElement("i", {
                                className: "ion ion-android-done"
                            })), i.a.createElement("div", {
                                className: "work_inner"
                            }, i.a.createElement("h4", {
                                className: "animation",
                                "data-animation": "fadeInUp",
                                "data-animation-delay": "0.3s"
                            }, "Truly Transparent"), i.a.createElement("p", {
                                className: "animation",
                                "data-animation": "fadeInUp",
                                "data-animation-delay": "0.4s"
                            }, "not managed by anyone, including its own software team. It is developed as a fully automatic system. Nobody has access to funds. Your funds are secured between you and the smart contract on Tron blockchain"))))))))), i.a.createElement("section", {
                                id: "opportunity",
                                className: "section_banner section_gradiant small_pb",
                                "data-z-index": 1,
                                "data-parallax": "scroll",
                                "data-image-src": "assests/images/banner_bg3.png",
                                style: {
                                    padding: "70px 0"
                                }
                            }, i.a.createElement("div", {
                                className: "container"
                            }, i.a.createElement("div", {
                                className: "row"
                            }, i.a.createElement("div", {
                                className: "col-lg-6 offset-lg-3 col-md-12 col-sm-12"
                            }, i.a.createElement("div", {
                                className: "title_default_light title_border text-center"
                            }, i.a.createElement("h4", {
                                className: "animation",
                                "data-animation": "fadeInUp",
                                "data-animation-delay": "0.2s"
                            }, "How to Start ?"), i.a.createElement("p", {
                                className: "animation",
                                "data-animation": "fadeInUp",
                                "data-animation-delay": "0.4s"
                            }, "Everything is simple just step by step")))), i.a.createElement("div", {
                                className: "row"
                            }, i.a.createElement("div", {
                                className: "col-lg-6"
                            }, i.a.createElement("ul", {
                                className: "list_none app_list"
                            }, i.a.createElement("li", null, i.a.createElement("div", {
                                className: "mobileapp_icon gradient_box animation grad-txt",
                                "data-animation": "fadeInLeft",
                                "data-animation-delay": "0.2s"
                            }, "1."), i.a.createElement("div", {
                                className: "mobileapp_desc"
                            }, i.a.createElement("h5", {
                                className: "animation",
                                "data-animation": "fadeInUp",
                                "data-animation-delay": "0.3s"
                            }, "Install Tronlink Wallet"), i.a.createElement("p", {
                                className: "animation",
                                "data-animation": "fadeInUp",
                                "data-animation-delay": "0.4s"
                            }, "You must have a dapp tron wallet to interact with smart contracts, We recommend you to use Tronlink Wallet. You can Install it from Google play and App store, Create your account and send trx from exchanges to your wallet address"))), i.a.createElement("li", null, i.a.createElement("div", {
                                className: "mobileapp_icon gradient_box animation grad-txt",
                                "data-animation": "fadeInLeft",
                                "data-animation-delay": "0.4s"
                            }, "2."), i.a.createElement("div", {
                                className: "mobileapp_desc"
                            }, i.a.createElement("h5", {
                                className: "animation",
                                "data-animation": "fadeInUp",
                                "data-animation-delay": "0.5s"
                            }, "Make Invest"), i.a.createElement("p", {
                                className: "animation",
                                "data-animation": "fadeInUp",
                                "data-animation-delay": "0.6s"
                            }, "copy Tron-Holding.com or your upline referral link and past on Tronlink browser, you will enter the website ,go to invest part and enter as much as you want to invest, dont forget transaction fee, press invest bottom and approve it, You become a Member , enjoy earning"))), i.a.createElement("li", null, i.a.createElement("div", {
                                className: "mobileapp_icon gradient_box animation grad-txt",
                                "data-animation": "fadeInLeft",
                                "data-animation-delay": "0.2s"
                            }, "3."), i.a.createElement("div", {
                                className: "mobileapp_desc"
                            }, i.a.createElement("h5", {
                                className: "animation",
                                "data-animation": "fadeInUp",
                                "data-animation-delay": "0.3s"
                            }, "Invite friends and earn more"), i.a.createElement("p", {
                                className: "animation",
                                "data-animation": "fadeInUp",
                                "data-animation-delay": "0.4s"
                            }, "After your investment, your Referral link will be activated, copy it and send to your friends, if they invest with your referral link, you will get up to 20% of their investments"))))), i.a.createElement("div", {
                                className: "col-lg-6"
                            }, i.a.createElement("div", {
                                className: "token_sale res_md_mt_20"
                            }, i.a.createElement("div", {
                                className: "tk_countdown bg-white-tran text-center animation animated fadeIn",
                                "data-animation": "fadeIn",
                                "data-animation-delay": "0.6s",
                                style: {
                                    animationDelay: "0.6s",
                                    opacity: 1
                                }
                            }, i.a.createElement("div", {
                                className: "tk_counter_inner"
                            }, i.a.createElement("h5", {
                                className: "animation text-white animated fadeInUp",
                                "data-animation": "fadeInUp",
                                "data-animation-delay": "1.3s",
                                style: {
                                    animationDelay: "1.3s",
                                    opacity: 1,
                                    marginBottom: "30px"
                                }
                            }, "New Evolution in DeFi World"), i.a.createElement("img", {
                                src: "assests/images/tron.png",
                                style: {
                                    marginBottom: "20px"
                                }
                            }), i.a.createElement("a", {
                                href: "#",
                                className: "btn btn-default animation animated fadeInUp",
                                "data-animation": "fadeInUp",
                                "data-animation-delay": "0.9s",
                                style: {
                                    animationDelay: "0.9s",
                                    opacity: 1
                                }
                            }, "Join Today and Make Tomorrow")))))))), i.a.createElement("section", {
                                className: "client_logo small_pt small_pb"
                            }, i.a.createElement("div", {
                                className: "container"
                            }, i.a.createElement("div", {
                                className: "row"
                            }, i.a.createElement("div", {
                                className: "col-lg-6 offset-lg-3 col-md-12 col-sm-12"
                            }, i.a.createElement("div", {
                                className: "title_default_light title_border text-center"
                            }, i.a.createElement("h4", {
                                className: "animation",
                                "data-animation": "fadeInUp",
                                "data-animation-delay": "0.2s"
                            }, "Referral Commission Distribution")))), i.a.createElement("div", {
                                className: "row align-items-center text-center overflow_hide small_space"
                            }, i.a.createElement("div", {
                                className: "col-md-2"
                            }), i.a.createElement("div", {
                                className: "col-lg-8 col-md-6"
                            }, i.a.createElement("img", {
                                src: "assests/images/referrals.png",
                                style: {
                                    marginBottom: "20px"
                                }
                            }), i.a.createElement("div", {
                                className: "token_info_table_s2 h-100"
                            }, i.a.createElement("table", {
                                className: "table table-blue m-0 h-100"
                            }, i.a.createElement("tbody", null, i.a.createElement("tr", {
                                className: "animation animated fadeInUp",
                                "data-animation": "fadeInUp",
                                "data-animation-delay": "0.2s",
                                style: {
                                    animationDelay: "0.2s",
                                    opacity: 1
                                }
                            }, i.a.createElement("td", null, "Level - 1"), i.a.createElement("td", null, "15%"), i.a.createElement("td", null, this.state.L1)), i.a.createElement("tr", {
                                className: "animation animated fadeInUp",
                                "data-animation": "fadeInUp",
                                "data-animation-delay": "0.3s",
                                style: {
                                    animationDelay: "0.3s",
                                    opacity: 1
                                }
                            }, i.a.createElement("td", null, "Level - 2"), i.a.createElement("td", null, "3%"), i.a.createElement("td", null, this.state.L2)), i.a.createElement("tr", {
                                className: "animation animated fadeInUp",
                                "data-animation": "fadeInUp",
                                "data-animation-delay": "0.3s",
                                style: {
                                    animationDelay: "0.3s",
                                    opacity: 1
                                }
                            }, i.a.createElement("td", null, "Level - 3"), i.a.createElement("td", null, "2%"), i.a.createElement("td", null, this.state.L3)))))), i.a.createElement("div", {
                                className: "col-md-2"
                            })))), i.a.createElement("section", {
                                id: "mobileapp"
                            }, i.a.createElement("div", {
                                className: "container"
                            }, i.a.createElement("div", {
                                className: "row"
                            }, i.a.createElement("div", {
                                className: "col-lg-12 col-md-12 col-sm-12"
                            }, i.a.createElement("div", {
                                className: "title_default_light title_border text_md_center"
                            }, i.a.createElement("h4", {
                                className: "animation",
                                "data-animation": "fadeInUp",
                                "data-animation-delay": "0.2s"
                            }, "How everything is working")))), i.a.createElement("div", {
                                className: "row"
                            }, i.a.createElement("div", {
                                className: "col-lg-6 col-md-12 col-sm-12"
                            }, i.a.createElement("ul", {
                                className: "list_none app_list"
                            }, i.a.createElement("li", null, i.a.createElement("div", {
                                className: "mobileapp_icon gradient_box animation",
                                "data-animation": "fadeInLeft",
                                "data-animation-delay": "0.2s"
                            }, i.a.createElement("i", {
                                className: "fa fa-mobile"
                            })), i.a.createElement("div", {
                                className: "mobileapp_desc"
                            }, i.a.createElement("h5", {
                                className: "animation",
                                "data-animation": "fadeInUp",
                                "data-animation-delay": "0.3s"
                            }, "Totally risk free"), i.a.createElement("p", {
                                className: "animation",
                                "data-animation": "fadeInUp",
                                "data-animation-delay": "0.4s"
                            }, "Open-source Smart Contract based on Blockchain Tronscan. Powered by Tronscan Cryptocurrency - International and Decentralized."))), i.a.createElement("li", null, i.a.createElement("div", {
                                className: "mobileapp_icon gradient_box animation",
                                "data-animation": "fadeInLeft",
                                "data-animation-delay": "0.4s"
                            }, i.a.createElement("i", {
                                className: "fa fa-codepen"
                            })), i.a.createElement("div", {
                                className: "mobileapp_desc"
                            }, i.a.createElement("h5", {
                                className: "animation",
                                "data-animation": "fadeInUp",
                                "data-animation-delay": "0.5s"
                            }, "Pay-out from Smart-Contract "), i.a.createElement("p", {
                                className: "animation",
                                "data-animation": "fadeInUp",
                                "data-animation-delay": "0.6s"
                            }, "This concept is designed to transfer your money from wallet to wallet. All transactions are 100% from the contract address to participants' wallets. Wallets are anonymous."))), i.a.createElement("li", null, i.a.createElement("div", {
                                className: "mobileapp_icon gradient_box animation",
                                "data-animation": "fadeInLeft",
                                "data-animation-delay": "0.2s"
                            }, i.a.createElement("i", {
                                className: "fa fa-mobile"
                            })), i.a.createElement("div", {
                                className: "mobileapp_desc"
                            }, i.a.createElement("h5", {
                                className: "animation",
                                "data-animation": "fadeInUp",
                                "data-animation-delay": "0.3s"
                            }, "Decentralized & Long term"), i.a.createElement("p", {
                                className: "animation",
                                "data-animation": "fadeInUp",
                                "data-animation-delay": "0.4s"
                            }, "This project runs on a decentralized Tronscan platform that has to support a Smart contract which will exist as long as the blockchain exists and even the creators of the smart contract will not be able to delete or change its terms."))))), i.a.createElement("div", {
                                className: "col-lg-6 col-md-12 col-sm-12"
                            }, i.a.createElement("ul", {
                                className: "list_none app_list"
                            }, i.a.createElement("li", null, i.a.createElement("div", {
                                className: "mobileapp_icon gradient_box animation",
                                "data-animation": "fadeInLeft",
                                "data-animation-delay": "0.4s"
                            }, i.a.createElement("i", {
                                className: "fa fa-codepen"
                            })), i.a.createElement("div", {
                                className: "mobileapp_desc"
                            }, i.a.createElement("h5", {
                                className: "animation",
                                "data-animation": "fadeInUp",
                                "data-animation-delay": "0.5s"
                            }, "Easy to understand"), i.a.createElement("p", {
                                className: "animation",
                                "data-animation": "fadeInUp",
                                "data-animation-delay": "0.6s"
                            }, "It is easy to understand even for those who have not encountered such projects."))), i.a.createElement("li", null, i.a.createElement("div", {
                                className: "mobileapp_icon gradient_box animation",
                                "data-animation": "fadeInLeft",
                                "data-animation-delay": "0.6s"
                            }, i.a.createElement("i", {
                                className: "fa fa-shopping-cart"
                            })), i.a.createElement("div", {
                                className: "mobileapp_desc"
                            }, i.a.createElement("h5", {
                                className: "animation",
                                "data-animation": "fadeInUp",
                                "data-animation-delay": "0.7s"
                            }, "Un-freaking-hackable"), i.a.createElement("p", {
                                className: "animation",
                                "data-animation": "fadeInUp",
                                "data-animation-delay": "0.8s"
                            }, "It is designed in such a way that no one can change the algorithm or delete and unhackable. The system is able to work without a site. The site is needed only for convenient display of statistics."))), i.a.createElement("li", null, i.a.createElement("div", {
                                className: "mobileapp_icon gradient_box animation",
                                "data-animation": "fadeInLeft",
                                "data-animation-delay": "0.6s"
                            }, i.a.createElement("i", {
                                className: "fa fa-shopping-cart"
                            })), i.a.createElement("div", {
                                className: "mobileapp_desc"
                            }, i.a.createElement("h5", {
                                className: "animation",
                                "data-animation": "fadeInUp",
                                "data-animation-delay": "0.7s"
                            }, "Passive income from the day of JOINING"), i.a.createElement("p", {
                                className: "animation",
                                "data-animation": "fadeInUp",
                                "data-animation-delay": "0.8s"
                            }, "Earn passive income from the first day from your levels.")))))))), i.a.createElement("section", {
                                id: "wallet"
                            }, i.a.createElement("div", {
                                className: "container"
                            }, i.a.createElement("div", {
                                className: "row align-items-center"
                            }, i.a.createElement("div", {
                                className: "col-lg-6 col-md-12 col-sm-12"
                            }, i.a.createElement("div", {
                                className: "title_default_light title_border text_md_center"
                            }, i.a.createElement("h4", {
                                className: "animation animated fadeInUp",
                                "data-animation": "fadeInUp",
                                "data-animation-delay": "0.2s",
                                style: {
                                    animationDelay: "0.2s",
                                    opacity: 1
                                }
                            }, "Install Tronlink Wallet")), i.a.createElement("div", {
                                className: "title_default_light title_border"
                            }, i.a.createElement("p", {
                                className: "animation",
                                "data-animation": "fadeInUp",
                                "data-animation-delay": "0.4s"
                            }, "Tronlink Wallet supports TRX and other tokens on TRON's mainnet.The client supports multiple platforms, you can choose to download.")), i.a.createElement("div", {
                                className: "btn_group text_md_center animation animated fadeInUp",
                                "data-animation": "fadeInUp",
                                "data-animation-delay": "0.8s",
                                style: {
                                    animationDelay: "0.8s",
                                    opacity: 1
                                }
                            }, i.a.createElement("a", {
                                target: "_blank",
                                href: "https://play.google.com/store/apps/details?id=com.tronlinkpro.wallet&pli=1",
                                className: "btn btn-default btn-radius"
                            }, i.a.createElement("em", {
                                className: "ion-social-android"
                            }), "Google Store "), i.a.createElement("a", {
                                target: "_blank",
                                href: "https://apps.apple.com/us/app/tronlink-trx-btt-wallet/id1453530188",
                                className: "btn btn-default btn-radius"
                            }, i.a.createElement("em", {
                                className: "ion-social-apple"
                            }), "Apple Store"))), i.a.createElement("div", {
                                className: "col-lg-6 col-md-12 col-sm-12"
                            }, i.a.createElement("div", {
                                className: "res_md_mt_50 res_sm_mt_20 text_center animation animated fadeInRight",
                                "data-animation": "fadeInRight",
                                "data-animation-delay": "0.2s",
                                style: {
                                    animationDelay: "0.2s",
                                    opacity: 1,
                                    textAlign: "center"
                                }
                            }, i.a.createElement("img", {
                                src: "assests/images/tron-left.png",
                                alt: "tron_wallet"
                            })))))), i.a.createElement("section", {
                                id: "faq",
                                className: "small_pb small_pt"
                            }, i.a.createElement("div", {
                                className: "container"
                            }, i.a.createElement("div", {
                                className: "row"
                            }, i.a.createElement("div", {
                                className: "col-lg-8 col-md-12 offset-lg-2"
                            }, i.a.createElement("div", {
                                className: "title_default_light title_border text-center"
                            }, i.a.createElement("h4", {
                                className: "animation",
                                "data-animation": "fadeInUp",
                                "data-animation-delay": "0.2s"
                            }, "Ask Me"), i.a.createElement("p", {
                                className: "animation",
                                "data-animation": "fadeInUp",
                                "data-animation-delay": "0.4s"
                            }, "Frequently asked questions (FAQ) or Questions and Answers (Q&A), are listed questions and answers, all supposed to be commonly asked in some context")))), i.a.createElement("div", {
                                className: "row"
                            }, i.a.createElement("div", {
                                className: "col-lg-12 col-md-12"
                            }, i.a.createElement("div", {
                                className: "tab_content"
                            }, i.a.createElement("div", {
                                className: "tab-content half_tab"
                            }, i.a.createElement("div", {
                                className: "tab-pane fade show active",
                                id: "tab1",
                                role: "tabpanel"
                            }, i.a.createElement("div", {
                                className: "row"
                            }, i.a.createElement("div", {
                                className: "col-md-6"
                            }, i.a.createElement("div", {
                                id: "accordion1",
                                className: "faq_content2"
                            }, i.a.createElement("div", {
                                className: "card animation",
                                "data-animation": "fadeInUp",
                                "data-animation-delay": "0.4s"
                            }, i.a.createElement("div", {
                                className: "card-header",
                                id: "headingOne"
                            }, i.a.createElement("h6", {
                                className: "mb-0"
                            }, " ", i.a.createElement("a", {
                                "data-toggle": "collapse",
                                href: "#collapseOne",
                                "aria-expanded": "true",
                                "aria-controls": "collapseOne"
                            }, "How much i can earn in Tron Holding?"), " ")), i.a.createElement("div", {
                                id: "collapseOne",
                                className: "collapse show",
                                "aria-labelledby": "headingOne",
                                "data-parent": "#accordion1"
                            }, i.a.createElement("div", {
                                className: "card-body"
                            }, " in TRX plan you will earn 2% TRX daily + 10% of investment as THT token + 20% referral rewards. in THT plan you will earn 5% THT daily"))), i.a.createElement("div", {
                                className: "card animation",
                                "data-animation": "fadeInUp",
                                "data-animation-delay": "0.6s"
                            }, i.a.createElement("div", {
                                className: "card-header",
                                id: "headingTwo"
                            }, i.a.createElement("h6", {
                                className: "mb-0"
                            }, " ", i.a.createElement("a", {
                                className: "collapsed",
                                "data-toggle": "collapse",
                                href: "#collapseTwo",
                                "aria-expanded": "false",
                                "aria-controls": "collapseTwo"
                            }, "can i buy or sell Tron Holding Token?"), " ")), i.a.createElement("div", {
                                id: "collapseTwo",
                                className: "collapse",
                                "aria-labelledby": "headingTwo",
                                "data-parent": "#accordion1"
                            }, i.a.createElement("div", {
                                className: "card-body"
                            }, " Yes, you can buy THT token as much as you need, THT price is 2 trx now and you can sell it when it listed in exchanges, THT will list in exchanges when our THT holders reach to 1,000,000 to be decentralized. after listing, THT price will grow very much"))), i.a.createElement("div", {
                                className: "card animation",
                                "data-animation": "fadeInUp",
                                "data-animation-delay": "0.8s"
                            }, i.a.createElement("div", {
                                className: "card-header",
                                id: "headingThree"
                            }, i.a.createElement("h6", {
                                className: "mb-0"
                            }, " ", i.a.createElement("a", {
                                className: "collapsed",
                                "data-toggle": "collapse",
                                href: "#collapseThree",
                                "aria-expanded": "false",
                                "aria-controls": "collapseThree"
                            }, "How much secure is Tron Holding ?"), " ")), i.a.createElement("div", {
                                id: "collapseThree",
                                className: "collapse",
                                "aria-labelledby": "headingThree",
                                "data-parent": "#accordion1"
                            }, i.a.createElement("div", {
                                className: "card-body"
                            }, " Tron Holding has a Verified and Open source smart contract in Tron Blockchain and never be hacked or change, It follows a wallet to wallet system of payment. So there is no chance any money goes in the wrong hands as only the owner of the wallet has the key to access"))))), i.a.createElement("div", {
                                className: "col-md-6"
                            }, i.a.createElement("div", {
                                id: "accordion2",
                                className: "faq_content2"
                            }, i.a.createElement("div", {
                                className: "card animation",
                                "data-animation": "fadeInUp",
                                "data-animation-delay": "0.4s"
                            }, i.a.createElement("div", {
                                className: "card-header",
                                id: "headingFive"
                            }, i.a.createElement("h6", {
                                className: "mb-0"
                            }, " ", i.a.createElement("a", {
                                "data-toggle": "collapse",
                                href: "#collapseFive",
                                "aria-expanded": "true",
                                "aria-controls": "collapseFive"
                            }, "What currency does Tron Holding work with?"), " ")), i.a.createElement("div", {
                                id: "collapseFive",
                                className: "collapse show",
                                "aria-labelledby": "headingFive",
                                "data-parent": "#accordion2"
                            }, i.a.createElement("div", {
                                className: "card-body"
                            }, " Tron Holding works with Tron crypto currency and Tron Holding Token (THT), Tron is one of the well-known crypto currencies in the world currently."))), i.a.createElement("div", {
                                className: "card animation",
                                "data-animation": "fadeInUp",
                                "data-animation-delay": "0.6s"
                            }, i.a.createElement("div", {
                                className: "card-header",
                                id: "headingSix"
                            }, i.a.createElement("h6", {
                                className: "mb-0"
                            }, " ", i.a.createElement("a", {
                                className: "collapsed",
                                "data-toggle": "collapse",
                                href: "#collapseSix",
                                "aria-expanded": "false",
                                "aria-controls": "collapseSix"
                            }, "How do i participate in the project?"), " ")), i.a.createElement("div", {
                                id: "collapseSix",
                                className: "collapse",
                                "aria-labelledby": "headingSix",
                                "data-parent": "#accordion2"
                            }, i.a.createElement("div", {
                                className: "card-body"
                            }, " It is enough to have a computer or a smartphone with an Tron Wallet. We also advise you to install Telegram instant messenger for  communication amongst the community and also receive latest news, information etc. on our chat."))))))))))))), i.a.createElement("footer", null, i.a.createElement("div", {
                                className: "bottom_footer"
                            }, i.a.createElement("div", {
                                className: "container"
                            }, i.a.createElement("div", {
                                    className: "row"
                                }, i.a.createElement("div", {
                                    className: "col-md-5"
                                }, i.a.createElement("p", {
                                    className: "copyright"
                                }, "Copyright \xa9 2022 tron-holding.com. All Rights Reserved.")), i.a.createElement("div", {
                                        className: "col-md-2"
                                    },
                                    i.a.createElement("a", {
                                        href: "https://t.me/TronHolding_official",
                                        target: "_blank"
                                    }, i.a.createElement("i", {
                                        class: "fa fa-telegram fa-4 tl",
                                        "aria-hidden": "true"
                                    }))),
                                i.a.createElement("div", {
                                    className: "col-md-5"
                                }, i.a.createElement("ul", {
                                    className: "list_none footer_menu "
                                }, i.a.createElement("li", null, " ", i.a.createElement("a", {
                                    href: "https://tronscan.org/#/contract/TRHomGdRmRZwsSdRBvZryAXgfSXpPCPjqw",
                                    target: "_blank"
                                }, "Contract Address : TRHomGdRmRZwsSdRBvZryAXgfSXpPCPjqw")))))))), i.a.createElement("a", {
                                href: "#",
                                className: "scrollup btn-default"
                            }, i.a.createElement("i", {
                                className: "ion-ios-arrow-up"
                            })))
                        }
                    }]), e
                }(i.a.Component);
            Boolean("localhost" === window.location.hostname || "[::1]" === window.location.hostname || window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));
            o.a.render(i.a.createElement(i.a.StrictMode, null, i.a.createElement(g, null)), document.getElementById("root")), "serviceWorker" in navigator && navigator.serviceWorker.ready.then(function(a) {
                a.unregister()
            }).catch(function(a) {
                console.error(a.message)
            })
        },
        60: function(a, e, t) {
            a.exports = t(208)
        },
        65: function(a, e, t) {},
        76: function(a, e, t) {}
    },
    [
        [60, 1, 2]
    ]
]);
//# sourceMappingURL=main.ec9550d0.chunk.js.map