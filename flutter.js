"use strict";
function _toArray(t) {
  return _arrayWithHoles(t) || _iterableToArray(t) || _nonIterableRest();
}
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}
function _iterableToArray(t) {
  if (
    Symbol.iterator in Object(t) ||
    "[object Arguments]" === Object.prototype.toString.call(t)
  )
    return Array.from(t);
}
function _arrayWithHoles(t) {
  if (Array.isArray(t)) return t;
}
function _typeof(t) {
  return (_typeof =
    "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
      ? function (t) {
          return typeof t;
        }
      : function (t) {
          return t &&
            "function" == typeof Symbol &&
            t.constructor === Symbol &&
            t !== Symbol.prototype
            ? "symbol"
            : typeof t;
        })(t);
}
(Element.prototype.remove = function () {
  this.parentElement.removeChild(this);
}),
  (NodeList.prototype.remove = HTMLCollection.prototype.remove =
    function () {
      for (var t = this.length - 1; t >= 0; t--)
        this[t] &&
          this[t].parentElement &&
          this[t].parentElement.removeChild(this[t]);
    }),
  "document" in self &&
    (("classList" in document.createElement("_") &&
      (!document.createElementNS ||
        "classList" in
          document.createElementNS("http://www.w3.org/2000/svg", "g"))) ||
      !(function (t) {
        if ("Element" in t) {
          var e = "classList",
            n = "prototype",
            r = t.Element[n],
            o = Object,
            i =
              String[n].trim ||
              function () {
                return this.replace(/^\s+|\s+$/g, "");
              },
            a =
              Array[n].indexOf ||
              function (t) {
                for (var e = 0, n = this.length; n > e; e++)
                  if (e in this && this[e] === t) return e;
                return -1;
              },
            s = function (t, e) {
              (this.name = t),
                (this.code = DOMException[t]),
                (this.message = e);
            },
            c = function (t, e) {
              if ("" === e)
                throw new s("SYNTAX_ERR", "The token must not be empty.");
              if (/\s/.test(e))
                throw new s(
                  "INVALID_CHARACTER_ERR",
                  "The token must not contain space characters."
                );
              return a.call(t, e);
            },
            u = function (t) {
              for (
                var e = i.call(t.getAttribute("class") || ""),
                  n = e ? e.split(/\s+/) : [],
                  r = 0,
                  o = n.length;
                o > r;
                r++
              )
                this.push(n[r]);
              this._updateClassName = function () {
                t.setAttribute("class", this.toString());
              };
            },
            l = (u[n] = []),
            d = function () {
              return new u(this);
            };
          if (
            ((s[n] = Error[n]),
            (l.item = function (t) {
              return this[t] || null;
            }),
            (l.contains = function (t) {
              return ~c(this, t + "");
            }),
            (l.add = function () {
              var t,
                e = arguments,
                n = 0,
                r = e.length,
                o = !1;
              do (t = e[n] + ""), ~c(this, t) || (this.push(t), (o = !0));
              while (++n < r);
              o && this._updateClassName();
            }),
            (l.remove = function () {
              var t,
                e,
                n = arguments,
                r = 0,
                o = n.length,
                i = !1;
              do
                for (t = n[r] + "", e = c(this, t); ~e; )
                  this.splice(e, 1), (i = !0), (e = c(this, t));
              while (++r < o);
              i && this._updateClassName();
            }),
            (l.toggle = function (t, e) {
              var n = this.contains(t),
                r = n ? e !== !0 && "remove" : e !== !1 && "add";
              return r && this[r](t), e === !0 || e === !1 ? e : !n;
            }),
            (l.replace = function (t, e) {
              var n = c(t + "");
              ~n && (this.splice(n, 1, e), this._updateClassName());
            }),
            (l.toString = function () {
              return this.join(" ");
            }),
            o.defineProperty)
          ) {
            var f = { get: d, enumerable: !0, configurable: !0 };
            try {
              o.defineProperty(r, e, f);
            } catch (p) {
              (void 0 !== p.number && -2146823252 !== p.number) ||
                ((f.enumerable = !1), o.defineProperty(r, e, f));
            }
          } else o[n].__defineGetter__ && r.__defineGetter__(e, d);
        }
      })(self),
    (function () {
      var t = document.createElement("_");
      if ((t.classList.add("c1", "c2"), !t.classList.contains("c2"))) {
        var e = function r(t) {
          var r = DOMTokenList.prototype[t];
          DOMTokenList.prototype[t] = function (t) {
            var e,
              n = arguments.length;
            for (e = 0; n > e; e++) (t = arguments[e]), r.call(this, t);
          };
        };
        e("add"), e("remove");
      }
      if ((t.classList.toggle("c3", !1), t.classList.contains("c3"))) {
        var n = DOMTokenList.prototype.toggle;
        DOMTokenList.prototype.toggle = function (t, e) {
          return 1 in arguments && !this.contains(t) == !e
            ? e
            : n.call(this, t);
        };
      }
      "replace" in document.createElement("_").classList ||
        (DOMTokenList.prototype.replace = function (t, e) {
          var n = this.toString().split(" "),
            r = n.indexOf(t + "");
          ~r &&
            ((n = n.slice(r)),
            this.remove.apply(this, n),
            this.add(e),
            this.add.apply(this, n.slice(1)));
        }),
        (t = null);
    })()),
  !(function (t, e) {
    "object" ==
      ("undefined" == typeof exports ? "undefined" : _typeof(exports)) &&
    "undefined" != typeof module
      ? e()
      : "function" == typeof define && define.amd
      ? define(e)
      : e();
  })(0, function () {
    function t(t) {
      var e = this.constructor;
      return this.then(
        function (n) {
          return e.resolve(t()).then(function () {
            return n;
          });
        },
        function (n) {
          return e.resolve(t()).then(function () {
            return e.reject(n);
          });
        }
      );
    }
    function e() {}
    function n(t) {
      if (!(this instanceof n))
        throw new TypeError("Promises must be constructed via new");
      if ("function" != typeof t) throw new TypeError("not a function");
      (this._state = 0),
        (this._handled = !1),
        (this._value = void 0),
        (this._deferreds = []),
        s(t, this);
    }
    function r(t, e) {
      for (; 3 === t._state; ) t = t._value;
      0 !== t._state
        ? ((t._handled = !0),
          n._immediateFn(function () {
            var n = 1 === t._state ? e.onFulfilled : e.onRejected;
            if (null !== n) {
              var r;
              try {
                r = n(t._value);
              } catch (a) {
                return void i(e.promise, a);
              }
              o(e.promise, r);
            } else (1 === t._state ? o : i)(e.promise, t._value);
          }))
        : t._deferreds.push(e);
    }
    function o(t, e) {
      try {
        if (e === t)
          throw new TypeError("A promise cannot be resolved with itself.");
        if (e && ("object" == _typeof(e) || "function" == typeof e)) {
          var r = e.then;
          if (e instanceof n) return (t._state = 3), (t._value = e), void a(t);
          if ("function" == typeof r)
            return void s(
              (function (t, e) {
                return function () {
                  t.apply(e, arguments);
                };
              })(r, e),
              t
            );
        }
        (t._state = 1), (t._value = e), a(t);
      } catch (o) {
        i(t, o);
      }
    }
    function i(t, e) {
      (t._state = 2), (t._value = e), a(t);
    }
    function a(t) {
      2 === t._state &&
        0 === t._deferreds.length &&
        n._immediateFn(function () {
          t._handled || n._unhandledRejectionFn(t._value);
        });
      for (var e = 0, o = t._deferreds.length; o > e; e++)
        r(t, t._deferreds[e]);
      t._deferreds = null;
    }
    function s(t, e) {
      var n = !1;
      try {
        t(
          function (t) {
            n || ((n = !0), o(e, t));
          },
          function (t) {
            n || ((n = !0), i(e, t));
          }
        );
      } catch (r) {
        if (n) return;
        (n = !0), i(e, r);
      }
    }
    var c = setTimeout;
    (n.prototype["catch"] = function (t) {
      return this.then(null, t);
    }),
      (n.prototype.then = function (t, n) {
        var o = new this.constructor(e);
        return (
          r(
            this,
            new (function (t, e, n) {
              (this.onFulfilled = "function" == typeof t ? t : null),
                (this.onRejected = "function" == typeof e ? e : null),
                (this.promise = n);
            })(t, n, o)
          ),
          o
        );
      }),
      (n.prototype["finally"] = t),
      (n.all = function (t) {
        return new n(function (e, n) {
          function r(t, a) {
            try {
              if (a && ("object" == _typeof(a) || "function" == typeof a)) {
                var s = a.then;
                if ("function" == typeof s)
                  return void s.call(
                    a,
                    function (e) {
                      r(t, e);
                    },
                    n
                  );
              }
              (o[t] = a), 0 == --i && e(o);
            } catch (c) {
              n(c);
            }
          }
          if (!t || "undefined" == typeof t.length)
            throw new TypeError("Promise.all accepts an array");
          var o = Array.prototype.slice.call(t);
          if (0 === o.length) return e([]);
          for (var i = o.length, a = 0; o.length > a; a++) r(a, o[a]);
        });
      }),
      (n.resolve = function (t) {
        return t && "object" == _typeof(t) && t.constructor === n
          ? t
          : new n(function (e) {
              e(t);
            });
      }),
      (n.reject = function (t) {
        return new n(function (e, n) {
          n(t);
        });
      }),
      (n.race = function (t) {
        return new n(function (e, n) {
          for (var r = 0, o = t.length; o > r; r++) t[r].then(e, n);
        });
      }),
      (n._immediateFn =
        ("function" == typeof setImmediate &&
          function (t) {
            setImmediate(t);
          }) ||
        function (t) {
          c(t, 0);
        }),
      (n._unhandledRejectionFn = function (t) {
        void 0 !== console && console && void 0;
      });
    var u = (function () {
      if ("undefined" != typeof self) return self;
      if ("undefined" != typeof window) return window;
      if ("undefined" != typeof global) return global;
      throw Error("unable to locate global object");
    })();
    "Promise" in u
      ? u.Promise.prototype["finally"] || (u.Promise.prototype["finally"] = t)
      : (u.Promise = n);
  }),
  !(function (t) {
    function e(t) {
      if (
        ("string" != typeof t && (t = String(t)),
        /[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(t))
      )
        throw new TypeError("Invalid character in header field name");
      return t.toLowerCase();
    }
    function n(t) {
      return "string" != typeof t && (t = String(t)), t;
    }
    function r(t) {
      var e = {
        next: function () {
          var e = t.shift();
          return { done: void 0 === e, value: e };
        },
      };
      return (
        p.iterable &&
          (e[Symbol.iterator] = function () {
            return e;
          }),
        e
      );
    }
    function o(t) {
      (this.map = {}),
        t instanceof o
          ? t.forEach(function (t, e) {
              this.append(e, t);
            }, this)
          : Array.isArray(t)
          ? t.forEach(function (t) {
              this.append(t[0], t[1]);
            }, this)
          : t &&
            Object.getOwnPropertyNames(t).forEach(function (e) {
              this.append(e, t[e]);
            }, this);
    }
    function i(t) {
      return t.bodyUsed
        ? Promise.reject(new TypeError("Already read"))
        : void (t.bodyUsed = !0);
    }
    function a(t) {
      return new Promise(function (e, n) {
        (t.onload = function () {
          e(t.result);
        }),
          (t.onerror = function () {
            n(t.error);
          });
      });
    }
    function s(t) {
      var e = new FileReader(),
        n = a(e);
      return e.readAsArrayBuffer(t), n;
    }
    function c(t) {
      if (t.slice) return t.slice(0);
      var e = new Uint8Array(t.byteLength);
      return e.set(new Uint8Array(t)), e.buffer;
    }
    function u() {
      return (
        (this.bodyUsed = !1),
        (this._initBody = function (t) {
          if (((this._bodyInit = t), t))
            if ("string" == typeof t) this._bodyText = t;
            else if (p.blob && Blob.prototype.isPrototypeOf(t))
              this._bodyBlob = t;
            else if (p.formData && FormData.prototype.isPrototypeOf(t))
              this._bodyFormData = t;
            else if (
              p.searchParams &&
              URLSearchParams.prototype.isPrototypeOf(t)
            )
              this._bodyText = t.toString();
            else if (p.arrayBuffer && p.blob && m(t))
              (this._bodyArrayBuffer = c(t.buffer)),
                (this._bodyInit = new Blob([this._bodyArrayBuffer]));
            else {
              if (
                !p.arrayBuffer ||
                (!ArrayBuffer.prototype.isPrototypeOf(t) && !y(t))
              )
                throw new Error("unsupported BodyInit type");
              this._bodyArrayBuffer = c(t);
            }
          else this._bodyText = "";
          this.headers.get("content-type") ||
            ("string" == typeof t
              ? this.headers.set("content-type", "text/plain;charset=UTF-8")
              : this._bodyBlob && this._bodyBlob.type
              ? this.headers.set("content-type", this._bodyBlob.type)
              : p.searchParams &&
                URLSearchParams.prototype.isPrototypeOf(t) &&
                this.headers.set(
                  "content-type",
                  "application/x-www-form-urlencoded;charset=UTF-8"
                ));
        }),
        p.blob &&
          ((this.blob = function () {
            var t = i(this);
            if (t) return t;
            if (this._bodyBlob) return Promise.resolve(this._bodyBlob);
            if (this._bodyArrayBuffer)
              return Promise.resolve(new Blob([this._bodyArrayBuffer]));
            if (this._bodyFormData)
              throw new Error("could not read FormData body as blob");
            return Promise.resolve(new Blob([this._bodyText]));
          }),
          (this.arrayBuffer = function () {
            return this._bodyArrayBuffer
              ? i(this) || Promise.resolve(this._bodyArrayBuffer)
              : this.blob().then(s);
          })),
        (this.text = function () {
          var t,
            e,
            n,
            r = i(this);
          if (r) return r;
          if (this._bodyBlob)
            return (
              (t = this._bodyBlob),
              (e = new FileReader()),
              (n = a(e)),
              e.readAsText(t),
              n
            );
          if (this._bodyArrayBuffer)
            return Promise.resolve(
              (function (t) {
                for (
                  var e = new Uint8Array(t), n = new Array(e.length), r = 0;
                  r < e.length;
                  r++
                )
                  n[r] = String.fromCharCode(e[r]);
                return n.join("");
              })(this._bodyArrayBuffer)
            );
          if (this._bodyFormData)
            throw new Error("could not read FormData body as text");
          return Promise.resolve(this._bodyText);
        }),
        p.formData &&
          (this.formData = function () {
            return this.text().then(d);
          }),
        (this.json = function () {
          return this.text().then(JSON.parse);
        }),
        this
      );
    }
    function l(t, e) {
      var n,
        r,
        i = (e = e || {}).body;
      if (t instanceof l) {
        if (t.bodyUsed) throw new TypeError("Already read");
        (this.url = t.url),
          (this.credentials = t.credentials),
          e.headers || (this.headers = new o(t.headers)),
          (this.method = t.method),
          (this.mode = t.mode),
          i || null == t._bodyInit || ((i = t._bodyInit), (t.bodyUsed = !0));
      } else this.url = String(t);
      if (
        ((this.credentials = e.credentials || this.credentials || "omit"),
        (!e.headers && this.headers) || (this.headers = new o(e.headers)),
        (this.method =
          ((n = e.method || this.method || "GET"),
          (r = n.toUpperCase()),
          _.indexOf(r) > -1 ? r : n)),
        (this.mode = e.mode || this.mode || null),
        (this.referrer = null),
        ("GET" === this.method || "HEAD" === this.method) && i)
      )
        throw new TypeError("Body not allowed for GET or HEAD requests");
      this._initBody(i);
    }
    function d(t) {
      var e = new FormData();
      return (
        t
          .trim()
          .split("&")
          .forEach(function (t) {
            if (t) {
              var n = t.split("="),
                r = n.shift().replace(/\+/g, " "),
                o = n.join("=").replace(/\+/g, " ");
              e.append(decodeURIComponent(r), decodeURIComponent(o));
            }
          }),
        e
      );
    }
    function f(t, e) {
      e || (e = {}),
        (this.type = "default"),
        (this.status = void 0 === e.status ? 200 : e.status),
        (this.ok = this.status >= 200 && this.status < 300),
        (this.statusText = "statusText" in e ? e.statusText : "OK"),
        (this.headers = new o(e.headers)),
        (this.url = e.url || ""),
        this._initBody(t);
    }
    if (!t.fetch) {
      var p = {
        searchParams: "URLSearchParams" in t,
        iterable: "Symbol" in t && "iterator" in Symbol,
        blob:
          "FileReader" in t &&
          "Blob" in t &&
          (function () {
            try {
              return new Blob(), !0;
            } catch (t) {
              return !1;
            }
          })(),
        formData: "FormData" in t,
        arrayBuffer: "ArrayBuffer" in t,
      };
      if (p.arrayBuffer)
        var h = [
            "[object Int8Array]",
            "[object Uint8Array]",
            "[object Uint8ClampedArray]",
            "[object Int16Array]",
            "[object Uint16Array]",
            "[object Int32Array]",
            "[object Uint32Array]",
            "[object Float32Array]",
            "[object Float64Array]",
          ],
          m = function (t) {
            return t && DataView.prototype.isPrototypeOf(t);
          },
          y =
            ArrayBuffer.isView ||
            function (t) {
              return t && h.indexOf(Object.prototype.toString.call(t)) > -1;
            };
      (o.prototype.append = function (t, r) {
        (t = e(t)), (r = n(r));
        var o = this.map[t];
        this.map[t] = o ? o + "," + r : r;
      }),
        (o.prototype["delete"] = function (t) {
          delete this.map[e(t)];
        }),
        (o.prototype.get = function (t) {
          return (t = e(t)), this.has(t) ? this.map[t] : null;
        }),
        (o.prototype.has = function (t) {
          return this.map.hasOwnProperty(e(t));
        }),
        (o.prototype.set = function (t, r) {
          this.map[e(t)] = n(r);
        }),
        (o.prototype.forEach = function (t, e) {
          for (var n in this.map)
            this.map.hasOwnProperty(n) && t.call(e, this.map[n], n, this);
        }),
        (o.prototype.keys = function () {
          var t = [];
          return (
            this.forEach(function (e, n) {
              t.push(n);
            }),
            r(t)
          );
        }),
        (o.prototype.values = function () {
          var t = [];
          return (
            this.forEach(function (e) {
              t.push(e);
            }),
            r(t)
          );
        }),
        (o.prototype.entries = function () {
          var t = [];
          return (
            this.forEach(function (e, n) {
              t.push([n, e]);
            }),
            r(t)
          );
        }),
        p.iterable && (o.prototype[Symbol.iterator] = o.prototype.entries);
      var _ = ["DELETE", "GET", "HEAD", "OPTIONS", "POST", "PUT"];
      (l.prototype.clone = function () {
        return new l(this, { body: this._bodyInit });
      }),
        u.call(l.prototype),
        u.call(f.prototype),
        (f.prototype.clone = function () {
          return new f(this._bodyInit, {
            status: this.status,
            statusText: this.statusText,
            headers: new o(this.headers),
            url: this.url,
          });
        }),
        (f.error = function () {
          var t = new f(null, { status: 0, statusText: "" });
          return (t.type = "error"), t;
        });
      var b = [301, 302, 303, 307, 308];
      (f.redirect = function (t, e) {
        if (-1 === b.indexOf(e)) throw new RangeError("Invalid status code");
        return new f(null, { status: e, headers: { location: t } });
      }),
        (t.Headers = o),
        (t.Request = l),
        (t.Response = f),
        (t.fetch = function (t, e) {
          return new Promise(function (n, r) {
            var i = new l(t, e),
              a = new XMLHttpRequest();
            (a.onload = function () {
              var t,
                e,
                r = {
                  status: a.status,
                  statusText: a.statusText,
                  headers:
                    ((t = a.getAllResponseHeaders() || ""),
                    (e = new o()),
                    t
                      .replace(/\r?\n[\t ]+/g, " ")
                      .split(/\r?\n/)
                      .forEach(function (t) {
                        var n = t.split(":"),
                          r = n.shift().trim();
                        if (r) {
                          var o = n.join(":").trim();
                          e.append(r, o);
                        }
                      }),
                    e),
                };
              r.url =
                "responseURL" in a
                  ? a.responseURL
                  : r.headers.get("X-Request-URL");
              var i = "response" in a ? a.response : a.responseText;
              n(new f(i, r));
            }),
              (a.onerror = function () {
                r(new TypeError("Network request failed"));
              }),
              (a.ontimeout = function () {
                r(new TypeError("Network request failed"));
              }),
              a.open(i.method, i.url, !0),
              "include" === i.credentials
                ? (a.withCredentials = !0)
                : "omit" === i.credentials && (a.withCredentials = !1),
              "responseType" in a && p.blob && (a.responseType = "blob"),
              i.headers.forEach(function (t, e) {
                a.setRequestHeader(e, t);
              }),
              a.send(void 0 === i._bodyInit ? null : i._bodyInit);
          });
        }),
        (t.fetch.polyfill = !0);
    }
  })("undefined" != typeof self ? self : void 0),
  !(function (t, e) {
    "function" == typeof define && define.amd
      ? define([], function () {
          e(t);
        })
      : e(t);
  })(
    "undefined" != typeof exports
      ? exports
      : "undefined" != typeof window
      ? window
      : "undefined" != typeof self
      ? self
      : void 0,
    function (t) {
      var e =
          "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
        n =
          /^(?:[A-Za-z\d+\/]{4})*?(?:[A-Za-z\d+\/]{2}(?:==)?|[A-Za-z\d+\/]{3}=?)?$/;
      t.__Base64__ = Object.freeze(
        Object.create(null, {
          encode: {
            value: function (t) {
              return (function (t) {
                for (
                  var n, r, o, i, a = "", s = 0, c = (t = String(t)).length % 3;
                  s < t.length;

                ) {
                  if (
                    (r = t.charCodeAt(s++)) > 255 ||
                    (o = t.charCodeAt(s++)) > 255 ||
                    (i = t.charCodeAt(s++)) > 255
                  )
                    throw new TypeError(
                      "Failed to execute 'btoa' on 'Window': The string to be encoded contains characters outside of the Latin1 range."
                    );
                  a +=
                    e.charAt(((n = (r << 16) | (o << 8) | i) >> 18) & 63) +
                    e.charAt((n >> 12) & 63) +
                    e.charAt((n >> 6) & 63) +
                    e.charAt(63 & n);
                }
                return c ? a.slice(0, c - 3) + "===".substring(c) : a;
              })(
                encodeURIComponent(t).replace(
                  /%([0-9A-F]{2})/g,
                  function (t, e) {
                    return String.fromCharCode("0x" + e);
                  }
                )
              );
            },
          },
          decode: {
            value: function (t) {
              return decodeURIComponent(
                escape(
                  (function (t) {
                    if (
                      ((t = String(t).replace(/[\t\n\f\r ]+/g, "")), !n.test(t))
                    )
                      throw new TypeError(
                        "Failed to execute 'atob' on 'Window': The string to be decoded is not correctly encoded."
                      );
                    t += "==".slice(2 - (3 & t.length));
                    for (var r, o, i, a = "", s = 0; s < t.length; )
                      (r =
                        (e.indexOf(t.charAt(s++)) << 18) |
                        (e.indexOf(t.charAt(s++)) << 12) |
                        ((o = e.indexOf(t.charAt(s++))) << 6) |
                        (i = e.indexOf(t.charAt(s++)))),
                        (a +=
                          64 === o
                            ? String.fromCharCode((r >> 16) & 255)
                            : 64 === i
                            ? String.fromCharCode(
                                (r >> 16) & 255,
                                (r >> 8) & 255
                              )
                            : String.fromCharCode(
                                (r >> 16) & 255,
                                (r >> 8) & 255,
                                255 & r
                              ));
                    return a;
                  })(t)
                )
              );
            },
          },
        })
      );
    }
  ),
  (function (t) {
    function e(t) {
      return new Promise(function (e) {
        var n;
        try {
          if (t.PBFPubKey)
            return (
              (L = n = t.PBFPubKey),
              void (n in U && null !== U[n]
                ? e(U[n])
                : (U[n] = fetch(N + "/v2/checkout/upgrade", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ public_key: n }),
                  })
                    .then(function (t) {
                      return t.json();
                    })
                    .then(function (t) {
                      U[n] = [!!t.data.upgrade];
                      try {
                        U[n].push(new URL(t.data.custom).origin);
                      } catch (e) {}
                      return U[n];
                    })
                    ["catch"](function () {
                      return (U[n] = null);
                    })
                    .then(e)))
            );
        } catch (r) {}
        e();
      });
    }
    function n() {
      var t = [].concat(U[L]);
      return t[1] || (t[0] === !0 ? D : z);
    }
    function r(t, e) {
      try {
        M.removeEventListener("message", F[L]), (F[L] = null);
      } catch (n) {}
      (I = !1), t === !1 && y && y.onclose && y.onclose(e === !0), S(), a();
    }
    function o(t, e) {
      H = setTimeout(function () {
        r();
        try {
          t();
        } catch (e) {}
      }, e);
    }
    function i(t) {
      var e = [];
      for (var n in t)
        if (t.hasOwnProperty(n)) {
          var r = t[n];
          (r = encodeURIComponent(r)), e.push(n + "=" + r);
        }
      return "__=" + __Base64__.encode(e.join("&"));
    }
    function a() {
      if (j) {
        var t = document.getElementById("rve_spinner_container_0999");
        t && document.body.removeChild(t);
      }
    }
    function s(t, e) {
      (j = function () {
        var t = document.createElement("div"),
          e = document.createElement("div");
        t.setAttribute("class", "spinner-container"),
          t.setAttribute("id", "rve_spinner_container_0999"),
          e.setAttribute("class", "spinner");
        var n = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        n.setAttribute("width", "40px"),
          n.setAttribute("height", "40px"),
          n.setAttribute("viewBox", "0 0 60 60");
        var r = document.createElementNS("http://www.w3.org/2000/svg", "path");
        (r.style.fill = "#f5a623"),
          (r.style.fillRule = "evenodd"),
          r.setAttribute(
            "d",
            "M59.972 26a37.616 37.616 0 0 0-.71-3.455 30.092 30.092 0 0 0-1.446-4.26 30.682 30.682 0 0 0-4.809-7.849 29.483 29.483 0 0 0-7.594-6.389A29.733 29.733 0 0 0 36.292.551C34.63.216 32.956.015 31.255.002a39.08 39.08 0 0 0-3.964.16 30.369 30.369 0 0 0-9.898 2.747 30.882 30.882 0 0 0-7.34 4.848A30.286 30.286 0 0 0 4.4 14.495C2.7 17.28 1.427 20.32.73 23.509c-.562 2.545-.83 5.17-.696 7.782.12 2.532.509 5.063 1.272 7.488a30.823 30.823 0 0 0 1.782 4.5 30.367 30.367 0 0 0 2.464 4.112 30.149 30.149 0 0 0 6.67 6.764 29.967 29.967 0 0 0 18.779 5.827 29.845 29.845 0 0 0 9.724-1.942 29.06 29.06 0 0 0 8.237-4.862c1.232-1.045 2.33-2.224 3.362-3.47 1.045-1.259 1.982-2.585 2.76-4.018a29.445 29.445 0 0 0 1.714-3.817c.24-.643.469-1.286.656-1.956.2-.71.348-1.446.482-2.17.201-1.138.281-2.317.174-3.469-.093.51-.174 1.005-.294 1.5a14.602 14.602 0 0 1-.55 1.688c-.428 1.165-.964 2.29-1.473 3.416a36.09 36.09 0 0 1-2.25 4.125 28.98 28.98 0 0 1-1.353 1.996c-.482.643-1.031 1.259-1.58 1.862a23.257 23.257 0 0 1-3.617 3.268 26.913 26.913 0 0 1-4.3 2.585c-3.026 1.473-6.335 2.357-9.683 2.652a27.72 27.72 0 0 1-10.22-1.018 27.424 27.424 0 0 1-8.72-4.393 27.441 27.441 0 0 1-6.455-6.939c-1.808-2.719-3.054-5.786-3.737-8.987a26.897 26.897 0 0 1-.402-2.532c-.08-.723-.147-1.46-.174-2.196a26.23 26.23 0 0 1 .281-4.581c.496-3.295 1.568-6.47 3.228-9.363a26.813 26.813 0 0 1 5.64-6.885 26.563 26.563 0 0 1 7.607-4.701 25.887 25.887 0 0 1 5.01-1.46 24.97 24.97 0 0 1 2.611-.362c.429-.04.844-.04 1.273-.08.174 0 .348.013.522.013 2.906-.053 5.826.322 8.599 1.192a25.15 25.15 0 0 1 8.237 4.42 25.798 25.798 0 0 1 6.295 7.475 27.988 27.988 0 0 1 2.934 7.795c.134.63.24 1.26.348 1.889a2.11 2.11 0 0 0 .91 1.433c1.045.696 2.505.228 3.014-.897.174-.389.228-.804.161-1.193z"
          ),
          n.appendChild(r),
          n.classList.add("svg-spinner"),
          e.appendChild(n),
          t.appendChild(e),
          document.body.appendChild(t);
        var o = document.createElement("style");
        o &&
          (o.appendChild(
            document.createTextNode(
              ".spinner-container{height:100%;width:100%;position:fixed;top:0;left:0;background-color:rgba(225,225,225,.95); z-index:9999999}.svg-spinner{-webkit-animation:spin 500ms infinite linear;animation:spin 500ms infinite linear}.spinner{margin-top:-20px; margin-left:-20px; position:fixed; top:50%; left:50%;}@-webkit-keyframes spin {from { -webkit-transform: rotate(0deg);}to { -webkit-transform: rotate(360deg); }}@keyframes spin{from {transform:rotate(0deg);}to {transform:rotate(360deg);}}"
            )
          ),
          document.getElementsByTagName("head")[0].appendChild(o));
      }),
        (B = document.createElement("iframe")),
        B.setAttribute(
          "style",
          "position:fixed;top:0;left:0;z-index:-1;border:none;opacity:0;pointer-events:none;width:100%;height:100%;"
        ),
        B.setAttribute("allowTransparency", "true"),
        B.setAttribute("width", "100%"),
        B.setAttribute("height", "100%"),
        B.setAttribute("name", "checkout"),
        e
          ? ((k = "loading"),
            (B.style.opacity = "0"),
            (B.style.pointerEvents = "none"),
            (B.style.zIndex = "-1"),
            (J = function () {
              (O = !0),
                (document.body.style.overflow = "hidden"),
                (B.style.opacity = "1"),
                (B.style.pointerEvents = ""),
                (B.style.zIndex = "2147483647");
            }),
            (S = function () {
              (O = !1),
                (B.style.opacity = "0"),
                (B.style.pointerEvents = "none"),
                (B.style.zIndex = "-1"),
                (document.body.style.overflow = ""),
                f();
            }))
          : ((document.body.style.overflow = ""),
            (B.style.opacity = "1"),
            (B.style.pointerEvents = ""),
            (B.style.zIndex = "2147483647")),
        B.setAttribute("id", "flwpugpaidid"),
        (B.src = n() + "/?"),
        document.body &&
          (document.querySelector("#flwpugpaidid") &&
            document.querySelector("#flwpugpaidid").remove(),
          document.body.appendChild(B));
    }
    function c(t, e) {
      var n = {};
      return (
        e.forEach(function (e) {
          var r = t.getAttribute("data-" + e);
          r && (n[e] = r);
        }),
        n
      );
    }
    function u(t) {
      for (var e = t.attributes, n = e.length, r = [], o = 0; o < n; o++) {
        var i = e[o];
        i.name.match(/^data-meta-/) &&
          r.push({
            metaname: i.name.replace("data-meta-", ""),
            metavalue: i.value,
          });
      }
      return (o = null), (n = null), r;
    }
    function l(e, r) {
      (C = document.getElementById("flwpugpaidid")),
        e.loadtimeout && o(e.onloadtimeout, e.loadtimeout),
        (y = e);
      var a = JSON.parse(JSON.stringify(e));
      if (
        (delete a.callback,
        delete a.onclose,
        delete a.onpaymentinit,
        delete a.onvalidateotpinit,
        delete a.meta,
        delete a.theme,
        delete a.billing,
        (a.init_url = encodeURIComponent(t.location.href)),
        t.location.href.includes(N + "/flwv3-pug/getpaidx/api/hosted_pay/"))
      )
        B.src = B.src + i(a);
      else if (e.hosted_payment || 1 === E) B.src = B.src + i(a);
      else {
        var s = t.frames.checkout;
        n();
        I
          ? s.postMessage({ name: "config", configdata: i(a) }, "*")
          : ((B = document.createElement("iframe")),
            B.setAttribute(
              "style",
              "position:fixed;top:0;left:0;z-index:-1;border:none;opacity:0;pointer-events:none;width:100%;height:100%;"
            ),
            B.setAttribute("allowTransparency", "true"),
            B.setAttribute("width", "100%"),
            B.setAttribute("height", "100%"),
            B.setAttribute("name", "checkout"),
            (B.style.opacity = "1"),
            (B.style.pointerEvents = ""),
            (B.style.zIndex = "2147483647"),
            (document.body.style.overflow = "hidden"),
            (B.src = n() + "/?" + i(a)),
            document.querySelector("#flwpugpaidid") &&
              document.querySelector("#flwpugpaidid").remove(),
            document.body.appendChild(B));
      }
    }
    function d(t, e) {
      var n = "callback",
        r = "Triggered merchant callback",
        o = "CALLBACK";
      e === !0 &&
        ((n = "redirect"),
        (o = "REDIRECT_URL"),
        (r = "Redirecting to merchant"));
      var i =
          t.tx ||
          t.transactionobject ||
          (t.data && t.data.tx) ||
          t.data.transactionobject,
        a = i && i.modalauditid,
        s = i && i.customer && i.customer.email,
        c = {};
      return (
        (c.label = a),
        (c.modalauditid = a),
        (c.actor = s),
        (c.action = n),
        (c.context = /Mobi/.test(navigator.userAgent) ? "mobile" : "web"),
        (c.comment = r),
        (c.object = o),
        (c.token = "flw_event_wt_e5fe4da063edacb29ec19f"),
        (c.date = Date.now()),
        i && (c.data = i),
        fetch("https://flw-events-ge.herokuapp.com/event/create", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(c),
        })
      );
    }
    function f() {
      if (G)
        for (var e = 0; e < G; e++) {
          var n = K[e];
          if (n) {
            var r = {};
            (r = c(n, [
              "PBFPubKey",
              "txref",
              "amount",
              "customer_email",
              "customer_phone",
              "customer_lastname",
              "customer_firstname",
              "currency",
              "country",
              "customer_fullname",
              "callback",
              "onclose",
              "onvalidateotpinit",
              "onpaymentinit",
              "redirect_url",
              "pay_button_text",
              "custom_title",
              "custom_description",
              "custom_logo",
              "default_account",
              "payment_method",
              "exclude_banks",
              "settlement_token",
              "recurring_stop",
              "integrity_hash",
              "checkout_hash",
              "payload_hash",
              "redirect_post",
              "redirect_no_json",
              "payment_page",
              "payment_plan",
              "campaign_id",
              "subaccounts_id",
              "subaccounts_transaction_charge_type",
              "subaccounts_transaction_split_ratio",
              "subaccounts_transaction_charge",
              "subaccounts",
              "payment_options",
              "disable_pwb",
              "hosted_payment",
              "mobilemoney_network",
              "custom_expires",
              "is_event_tx",
            ])),
              (r.meta = u(n)),
              r.subaccounts && (r.subaccounts = JSON.parse(r.subaccounts)),
              r.subaccounts_id &&
                ((r.subaccounts = [
                  {
                    id: r.subaccounts_id,
                    transaction_split_ratio:
                      r.subaccounts_transaction_split_ratio,
                    transaction_charge_type:
                      r.subaccounts_transaction_charge_type,
                    transaction_charge: r.subaccounts_transaction_charge,
                  },
                ]),
                delete r.subaccounts_transaction_split_ratio,
                delete r.subaccounts_transaction_charge_type,
                delete r.subaccounts_transaction_charge,
                delete r.subaccounts_id);
            var o = document.createElement("button");
            (o.innerText = r.pay_button_text || "PAY NOW"),
              (n.innerText = ""),
              o.setAttribute(
                "style",
                "color:#fff;background-color:#0a2740;border-color:#142a3e;/*padding:10px;*/display:inline-block;padding:6px12px;margin-bottom:0;font-size:14px;font-weight:400;line-height:1.42857143;text-align:center;white-space:nowrap;vertical-align:middle;-ms-touch-action:manipulation;touch-action:manipulation;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;background-image:none;border:1pxsolidtransparent;border-radius:4px;"
              ),
              o.setAttribute("type", "button"),
              o.addEventListener("click", function (e) {
                t.FlutterwaveCheckout(r);
              }),
              n.appendChild(o);
          }
        }
      s(null, !0);
    }
    function p(t) {
      var e = {},
        n = {
          normalize_customer: function (t, e, n) {
            if (t.name) {
              var r = t.name + "",
                o = r.split(" ");
              o[0] && (n.customer_firstname = o[0]),
                o[1] && (n.customer_lastname = o.slice(1).join(" "));
            }
            return (
              t.email && (n.customer_email = t.email),
              t.phone_number && (n.customer_phone = t.phone_number),
              !0
            );
          },
          normalize_customizations: function (t, e, n) {
            return (
              t.title && (n.custom_title = t.title),
              t.description && (n.custom_description = t.description),
              t.logo && (n.custom_logo = t.logo),
              t.action_text && (n.pay_button_text = t.action_text),
              !0
            );
          },
          normalize_meta: function (t, e, n) {
            var r = [];
            return (
              "object" === _typeof(t) &&
                Object.keys(t).map(function (e) {
                  r.push({ metaname: e, metavalue: t[e] });
                }),
              r.length && (n.meta = r),
              !0
            );
          },
          normalize_bank_transfer_options: function (t, e, n) {
            return t.expires && (n.custom_expires = t.expires), !0;
          },
        },
        r = {
          public_key: "PBFPubKey",
          tx_ref: "txref",
          amount: "amount",
          currency: "currency",
          country: "country",
          integrity_hash: "integrity_hash",
          checkout_hash: "checkout_hash",
          payload_hash: "payload_hash",
          payment_options: "payment_options",
          payment_plan: "payment_plan",
          payment_page: "payment_page",
          redirect_url: "redirect_url",
          customer: "normalize_customer",
          subaccounts: "subaccounts",
          meta: "normalize_meta",
          callback: "callback",
          onclose: "onclose",
          customizations: "normalize_customizations",
          theme: "theme",
          billing: "billing",
          enforce_payment_options: "enforce_payment_options",
          force_inline_iframe: "force_inline_iframe",
          bank_transfer_options: "normalize_bank_transfer_options",
          is_event_tx: "is_event_tx",
        };
      return (
        Object.keys(r).forEach(function (o) {
          var i = r[o];
          return "amount" === o
            ? void (e[i] = +t[o] === +t[o] ? +t[o] : -1)
            : "theme" === o || "billing" === o
            ? void (
                "[object Object]" === Object.prototype.toString.call(t[o]) &&
                (e[i] = t[o])
              )
            : "enforce_payment_options" === o || "force_inline_iframe" === o
            ? void ("undefined" != typeof t[o] && (e[i] = 1))
            : void (t[o] && (n[i] ? n[i](t[o], t, e) : (e[i] = t[o])));
        }),
        e
      );
    }
    function h(t, e) {
      var n = [];
      e.customer_firstname && n.push(e.customer_firstname),
        e.customer_lastname && n.push(e.customer_lastname);
      var r = {
          status: "failed",
          customer: {
            email: e.customer_email,
            name: n.join(" "),
            phone_number: e.customer_phone,
          },
          transaction_id: null,
          tx_ref: e.txref,
          flw_ref: null,
          currency: e.currency || "NGN",
          amount: e.amount,
        },
        o = t.tx || (t.data && t.data.tx);
      return (
        o &&
          ((r.status = o.status),
          (r.transaction_id = o.id),
          (r.flw_ref = o.flwRef),
          (r.amount = o.amount),
          (r.currency = o.currency),
          (r.charged_amount = o.charged_amount),
          (r.charge_response_code = o.chargeResponseCode),
          (r.charge_response_message = o.chargeResponseMessage),
          (r.created_at = o.createdAt),
          (r.customer = {
            name: (o.customer && o.customer.fullName) || o["customer.fullName"],
            email: (o.customer && o.customer.email) || o["customer.email"],
            phone_number:
              (o.customer && o.customer.phone) || o["customer.phone"],
          })),
        r
      );
    }
    function m(t) {
      if (
        ((_ = t),
        _ &&
          !_.onclose &&
          (_.onclose = (function () {
            var t = document.location;
            return function () {
              document.location = t;
            };
          })()),
        (x = Date.now()),
        1 == t.hosted_payment && !t.is_hosted_page)
      ) {
        var e = document.createElement("form");
        e.setAttribute("method", "POST"),
          e.setAttribute("action", z + "/hosted/pay");
        for (var n in t)
          if ("meta" === n)
            t[n].forEach(function (t, r) {
              var o = document.createElement("input");
              o.setAttribute("type", "hidden"),
                o.setAttribute("name", n + "[" + r + "][metaname]"),
                o.setAttribute("value", t.metaname),
                e.appendChild(o);
              var o = document.createElement("input");
              o.setAttribute("type", "hidden"),
                o.setAttribute("name", n + "[" + r + "][metavalue]"),
                o.setAttribute("value", t.metavalue),
                e.appendChild(o);
            });
          else if (
            "theme" === n ||
            ("billing" === n &&
              "[object Object]" === Object.prototype.toString.call(t[n]))
          )
            Object.keys(t[n]).forEach(function (r) {
              var o = document.createElement("input");
              o.setAttribute("type", "hidden"),
                o.setAttribute("name", n + "[" + r + "]"),
                o.setAttribute("value", t[n][r]),
                e.appendChild(o);
            });
          else if ("subaccounts" === n)
            t[n].forEach(function (t, r) {
              var o = document.createElement("input");
              if (
                (o.setAttribute("type", "hidden"),
                o.setAttribute("name", n + "[" + r + "][id]"),
                o.setAttribute("value", t.id),
                e.appendChild(o),
                t.transaction_charge_type)
              ) {
                var o = document.createElement("input");
                o.setAttribute("type", "hidden"),
                  o.setAttribute(
                    "name",
                    n + "[" + r + "][transaction_charge_type]"
                  ),
                  o.setAttribute("value", t.transaction_charge_type),
                  e.appendChild(o);
              }
              if (t.transaction_charge) {
                var o = document.createElement("input");
                o.setAttribute("type", "hidden"),
                  o.setAttribute("name", n + "[" + r + "][transaction_charge]"),
                  o.setAttribute("value", t.transaction_charge),
                  e.appendChild(o);
              }
              if (t.transaction_split_ratio) {
                var o = document.createElement("input");
                o.setAttribute("type", "hidden"),
                  o.setAttribute(
                    "name",
                    n + "[" + r + "][transaction_split_ratio]"
                  ),
                  o.setAttribute("value", t.transaction_split_ratio),
                  e.appendChild(o);
              }
            });
          else {
            if (!~["string", "number", "boolean"].indexOf(_typeof(t[n])))
              continue;
            var r = document.createElement("input");
            r.setAttribute("type", "hidden"),
              r.setAttribute("name", n),
              r.setAttribute("value", t[n]),
              e.appendChild(r);
          }
        return document.body.appendChild(e), void e.submit();
      }
      (E = t.is_hosted_page),
        delete t.is_hosted_page,
        (b = t.meta),
        (v = t.subaccounts),
        (g = t.theme),
        (w = t.billing),
        l(t),
        "loaded" == k
          ? J()
          : (j(),
            (P = function () {
              J();
            }));
    }
    var y,
      _,
      b,
      v,
      g,
      w,
      A,
      x,
      E,
      T,
      C,
      k = "none",
      O = !1,
      S = !1,
      P = function () {},
      j = null,
      B = "",
      R = "",
      I = !1,
      L = null,
      U = {},
      F = {},
      N = "https://api.ravepay.co",
      z = "https://checkout.flutterwave.com",
      D = "https://checkout-v3-ui-prod.f4b-flutterwave.com",
      M = t;
    A = r;
    var q = {};
    (q.cannotloadiframe = function (t) {
      I = !1;
      var e = JSON.parse(JSON.stringify(_));
      document.location = B.src + i(e) || document.location;
    }),
      (q.readytorecieve = function (e) {
        (I = !0),
          (R = e.origin),
          e.source.postMessage(
            {
              name: "updategotten",
              meta: b,
              subaccounts: v,
              theme: g,
              billing: w,
              applepay: (function () {
                try {
                  return (
                    "ApplePaySession" in t &&
                    t.ApplePaySession.canMakePayments() === !0
                  );
                } catch (e) {
                  return !1;
                }
              })(),
              v3: !0,
            },
            e.origin
          );
      });
    var H;
    (q.allcontentloaded = function (t) {
      function e(e, n) {
        t.source.postMessage(
          { name: "icheckcomplete", check_error: e, check_error_message: n },
          t.origin
        );
      }
      clearTimeout(H),
        (k = "loaded"),
        O || P(),
        t.source.postMessage({ name: "clickreport", time: x }, t.origin),
        a(),
        y && y.onopen && y.onopen(),
        y && y.onintegritycheck ? y.onintegritycheck(t.data.hash, e) : e();
    }),
      (q.charge_complete = function (t) {
        (I = !1),
          y && y.chargecomplete && y.chargecomplete(t.data.type, t.data.data);
      }),
      (q.charge_init = function (t) {
        y && y.chargeinit && y.chargeinit(t.data.type, t.data.timestamp);
      }),
      (q.opop = q.vbvcomplete =
        function (e) {
          (I = !1),
            T && clearTimeout(T),
            y &&
              (T = setTimeout(function () {
                var n = y.redirect_url,
                  r = h(e.data, y);
                if (n) {
                  var o = n && ~n.indexOf("?"),
                    i = o ? "&" : "?",
                    a = encodeURIComponent(r && r.status),
                    s = encodeURIComponent(r && r.tx_ref),
                    c = encodeURIComponent(r && r.transaction_id);
                  return void d(e.data, !0)["finally"](function () {
                    t.location.href = parseRedirectUrl(
                      n +
                        i +
                        "status=" +
                        a +
                        "&tx_ref=" +
                        s +
                        "&transaction_id=" +
                        c
                    );
                  });
                }
                "function" == typeof y.callback &&
                  (r && (r.redirectstatus = e.data && e.data.redirectstatus),
                  d(e.data, !0)["finally"](function () {
                    y.callback(r);
                  }));
              }));
        }),
      (q.closeiframe = function (t) {
        r(!1, t.data.data.cancelled);
      });
    var J,
      K = document.querySelectorAll(".flwpug_getpaid"),
      G = K.length;
    f(),
      (t.parseRedirectUrl = function (e) {
        if ("string" == typeof e) {
          var n = e.split("?"),
            r = _toArray(n),
            o = r[0],
            i = r.slice(1);
          if (0 === o.indexOf("#"))
            return t.location.href
              .split("#")[0]
              .concat(o)
              .concat(i.length > 0 ? ";".concat(i.join("&")) : "");
        }
        return e;
      }),
      t.addEventListener("beforeunload", function () {
        T && clearTimeout(T);
      }),
      (t.FlutterwaveCheckout = function (t) {
        t =
          t &&
          "object" === _typeof(t) &&
          "error" === String(t.status).toLowerCase()
            ? t
            : p(t);
        var n = e(t),
          r = !1;
        return (
          n.then(function () {
            t.PBFPubKey === L &&
              r !== !0 &&
              ((F[L] = function (t) {
                var e = t && t.data && t.data.name;
                e && q[e] && (r === !0 ? A(!0, !1) : q[e](t));
              }),
              M.addEventListener("message", F[L]),
              m(t));
          }),
          {
            close: function () {
              try {
                t.PBFPubKey === L && ((r = !0), A(!0, !1));
              } catch (e) {}
            }.bind(null),
          }
        );
      });
  })(window);
