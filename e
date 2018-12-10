warning: LF will be replaced by CRLF in package-lock.json.
The file will have its original line endings in your working directory
warning: LF will be replaced by CRLF in package.json.
The file will have its original line endings in your working directory
[1mdiff --git a/package-lock.json b/package-lock.json[m
[1mindex d48a149..93f9880 100644[m
[1m--- a/package-lock.json[m
[1m+++ b/package-lock.json[m
[36m@@ -4,6 +4,11 @@[m
   "lockfileVersion": 1,[m
   "requires": true,[m
   "dependencies": {[m
[32m+[m[32m    "abbrev": {[m
[32m+[m[32m      "version": "1.1.1",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/abbrev/-/abbrev-1.1.1.tgz",[m
[32m+[m[32m      "integrity": "sha512-nne9/IiQ/hzIhY6pdDnbBtz7DjPTKrY00P/zvPSm5pOFkl6xuGrGnXn/VtTNNfNtAfZ9/1RtehkszU9qcTii0Q=="[m
[32m+[m[32m    },[m
     "accepts": {[m
       "version": "1.3.5",[m
       "resolved": "https://registry.npmjs.org/accepts/-/accepts-1.3.5.tgz",[m
[36m@@ -28,6 +33,14 @@[m
         "repeat-string": "1.6.1"[m
       }[m
     },[m
[32m+[m[32m    "ansi-align": {[m
[32m+[m[32m      "version": "2.0.0",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/ansi-align/-/ansi-align-2.0.0.tgz",[m
[32m+[m[32m      "integrity": "sha1-w2rsy6VjuJzrVW82kPCx2eNUf38=",[m
[32m+[m[32m      "requires": {[m
[32m+[m[32m        "string-width": "2.1.1"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
     "ansi-regex": {[m
       "version": "2.1.1",[m
       "resolved": "https://registry.npmjs.org/ansi-regex/-/ansi-regex-2.1.1.tgz",[m
[36m@@ -40,11 +53,45 @@[m
       "integrity": "sha1-tDLdM1i2NM914eRmQ2gkBTPB3b4=",[m
       "dev": true[m
     },[m
[32m+[m[32m    "anymatch": {[m
[32m+[m[32m      "version": "2.0.0",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/anymatch/-/anymatch-2.0.0.tgz",[m
[32m+[m[32m      "integrity": "sha512-5teOsQWABXHHBFP9y3skS5P3d/WfWXpv3FUpy+LorMrNYaT9pI4oLMQX7jzQ2KklNpGpWHzdCXTDT2Y3XGlZBw==",[m
[32m+[m[32m      "requires": {[m
[32m+[m[32m        "micromatch": "3.1.10",[m
[32m+[m[32m        "normalize-path": "2.1.1"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "arr-diff": {[m
[32m+[m[32m      "version": "4.0.0",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/arr-diff/-/arr-diff-4.0.0.tgz",[m
[32m+[m[32m      "integrity": "sha1-1kYQdP6/7HHn4VI1dhoyml3HxSA="[m
[32m+[m[32m    },[m
[32m+[m[32m    "arr-flatten": {[m
[32m+[m[32m      "version": "1.1.0",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/arr-flatten/-/arr-flatten-1.1.0.tgz",[m
[32m+[m[32m      "integrity": "sha512-L3hKV5R/p5o81R7O02IGnwpDmkp6E982XhtbuwSe3O4qOtMMMtodicASA1Cny2U+aCXcNpml+m4dPsvsJ3jatg=="[m
[32m+[m[32m    },[m
[32m+[m[32m    "arr-union": {[m
[32m+[m[32m      "version": "3.1.0",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/arr-union/-/arr-union-3.1.0.tgz",[m
[32m+[m[32m      "integrity": "sha1-45sJrqne+Gao8gbiiK9jkZuuOcQ="[m
[32m+[m[32m    },[m
     "array-flatten": {[m
       "version": "1.1.1",[m
       "resolved": "https://registry.npmjs.org/array-flatten/-/array-flatten-1.1.1.tgz",[m
       "integrity": "sha1-ml9pkFGx5wczKPKgCJaLZOopVdI="[m
     },[m
[32m+[m[32m    "array-unique": {[m
[32m+[m[32m      "version": "0.3.2",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/array-unique/-/array-unique-0.3.2.tgz",[m
[32m+[m[32m      "integrity": "sha1-qJS3XUvE9s1nnvMkSp/Y9Gri1Cg="[m
[32m+[m[32m    },[m
[32m+[m[32m    "assign-symbols": {[m
[32m+[m[32m      "version": "1.0.0",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/assign-symbols/-/assign-symbols-1.0.0.tgz",[m
[32m+[m[32m      "integrity": "sha1-WWZ/QfrdTyDMvCu5a41Pf3jsA2c="[m
[32m+[m[32m    },[m
     "async": {[m
       "version": "2.6.1",[m
       "resolved": "https://registry.npmjs.org/async/-/async-2.6.1.tgz",[m
[36m@@ -53,6 +100,16 @@[m
         "lodash": "4.17.10"[m
       }[m
     },[m
[32m+[m[32m    "async-each": {[m
[32m+[m[32m      "version": "1.0.1",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/async-each/-/async-each-1.0.1.tgz",[m
[32m+[m[32m      "integrity": "sha1-GdOGodntxufByF04iu28xW0zYC0="[m
[32m+[m[32m    },[m
[32m+[m[32m    "atob": {[m
[32m+[m[32m      "version": "2.1.2",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/atob/-/atob-2.1.2.tgz",[m
[32m+[m[32m      "integrity": "sha512-Wm6ukoaOGJi/73p/cl2GvLjTI5JM1k/O14isD73YML8StrH/7/lRFgmg8nICZgD3bZZvjwCGxtMOD3wWNAu8cg=="[m
[32m+[m[32m    },[m
     "babel-code-frame": {[m
       "version": "6.26.0",[m
       "resolved": "https://registry.npmjs.org/babel-code-frame/-/babel-code-frame-6.26.0.tgz",[m
[36m@@ -699,8 +756,67 @@[m
     "balanced-match": {[m
       "version": "1.0.0",[m
       "resolved": "https://registry.npmjs.org/balanced-match/-/balanced-match-1.0.0.tgz",[m
[31m-      "integrity": "sha1-ibTRmasr7kneFk6gK4nORi1xt2c=",[m
[31m-      "dev": true[m
[32m+[m[32m      "integrity": "sha1-ibTRmasr7kneFk6gK4nORi1xt2c="[m
[32m+[m[32m    },[m
[32m+[m[32m    "base": {[m
[32m+[m[32m      "version": "0.11.2",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/base/-/base-0.11.2.tgz",[m
[32m+[m[32m      "integrity": "sha512-5T6P4xPgpp0YDFvSWwEZ4NoE3aM4QBQXDzmVbraCkFj8zHM+mba8SyqB5DbZWyR7mYHo6Y7BdQo3MoA4m0TeQg==",[m
[32m+[m[32m      "requires": {[m
[32m+[m[32m        "cache-base": "1.0.1",[m
[32m+[m[32m        "class-utils": "0.3.6",[m
[32m+[m[32m        "component-emitter": "1.2.1",[m
[32m+[m[32m        "define-property": "1.0.0",[m
[32m+[m[32m        "isobject": "3.0.1",[m
[32m+[m[32m        "mixin-deep": "1.3.1",[m
[32m+[m[32m        "pascalcase": "0.1.1"[m
[32m+[m[32m      },[m
[32m+[m[32m      "dependencies": {[m
[32m+[m[32m        "define-property": {[m
[32m+[m[32m          "version": "1.0.0",[m
[32m+[m[32m          "resolved": "https://registry.npmjs.org/define-property/-/define-property-1.0.0.tgz",[m
[32m+[m[32m          "integrity": "sha1-dp66rz9KY6rTr56NMEybvnm/sOY=",[m
[32m+[m[32m          "requires": {[m
[32m+[m[32m            "is-descriptor": "1.0.2"[m
[32m+[m[32m          }[m
[32m+[m[32m        },[m
[32m+[m[32m        "is-accessor-descriptor": {[m
[32m+[m[32m          "version": "1.0.0",[m
[32m+[m[32m          "resolved": "https://registry.npmjs.org/is-accessor-descriptor/-/is-accessor-descriptor-1.0.0.tgz",[m
[32m+[m[32m          "integrity": "sha512-m5hnHTkcVsPfqx3AKlyttIPb7J+XykHvJP2B9bZDjlhLIoEq4XoK64Vg7boZlVWYK6LUY94dYPEE7Lh0ZkZKcQ==",[m
[32m+[m[32m          "requires": {[m
[32m+[m[32m            "kind-of": "6.0.2"[m
[32m+[m[32m          }[m
[32m+[m[32m        },[m
[32m+[m[32m        "is-data-descriptor": {[m
[32m+[m[32m          "version": "1.0.0",[m
[32m+[m[32m          "resolved": "https://registry.npmjs.org/is-data-descriptor/-/is-data-descriptor-1.0.0.tgz",[m
[32m+[m[32m          "integrity": "sha512-jbRXy1FmtAoCjQkVmIVYwuuqDFUbaOeDjmed1tOGPrsMhtJA4rD9tkgA0F1qJ3gRFRXcHYVkdeaP50Q5rE/jLQ==",[m
[32m+[m[32m          "requires": {[m
[32m+[m[32m            "kind-of": "6.0.2"[m
[32m+[m[32m          }[m
[32m+[m[32m        },[m
[32m+[m[32m        "is-descriptor": {[m
[32m+[m[32m          "version": "1.0.2",[m
[32m+[m[32m          "resolved": "https://registry.npmjs.org/is-descriptor/-/is-descriptor-1.0.2.tgz",[m
[32m+[m[32m          "integrity": "sha512-2eis5WqQGV7peooDyLmNEPUrps9+SXX5c9pL3xEB+4e9HnGuDa7mB7kHxHw4CbqS9k1T2hOH3miL8n8WtiYVtg==",[m
[32m+[m[32m          "requires": {[m
[32m+[m[32m            "is-accessor-descriptor": "1.0.0",[m
[32m+[m[32m            "is-data-descriptor": "1.0.0",[m
[32m+[m[32m            "kind-of": "6.0.2"[m
[32m+[m[32m          }[m
[32m+[m[32m        },[m
[32m+[m[32m        "kind-of": {[m
[32m+[m[32m          "version": "6.0.2",[m
[32m+[m[32m          "resolved": "https://registry.npmjs.org/kind-of/-/kind-of-6.0.2.tgz",[m
[32m+[m[32m          "integrity": "sha512-s5kLOcnH0XqDO+FvuaLX8DDjZ18CGFk7VygH40QoKPUQhW4e2rvM0rwUq0t8IQDOwYSeLK01U90OjzBTme2QqA=="[m
[32m+[m[32m        }[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "binary-extensions": {[m
[32m+[m[32m      "version": "1.12.0",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/binary-extensions/-/binary-extensions-1.12.0.tgz",[m
[32m+[m[32m      "integrity": "sha512-DYWGk01lDcxeS/K9IHPGWfT8PsJmbXRtRd2Sx72Tnb8pcYZQFF1oSDb8hJtS1vhp212q1Rzi5dUf9+nq0o9UIg=="[m
     },[m
     "bluebird": {[m
       "version": "3.5.1",[m
[36m@@ -734,16 +850,89 @@[m
         }[m
       }[m
     },[m
[32m+[m[32m    "boxen": {[m
[32m+[m[32m      "version": "1.3.0",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/boxen/-/boxen-1.3.0.tgz",[m
[32m+[m[32m      "integrity": "sha512-TNPjfTr432qx7yOjQyaXm3dSR0MH9vXp7eT1BFSl/C51g+EFnOR9hTg1IreahGBmDNCehscshe45f+C1TBZbLw==",[m
[32m+[m[32m      "requires": {[m
[32m+[m[32m        "ansi-align": "2.0.0",[m
[32m+[m[32m        "camelcase": "4.1.0",[m
[32m+[m[32m        "chalk": "2.4.1",[m
[32m+[m[32m        "cli-boxes": "1.0.0",[m
[32m+[m[32m        "string-width": "2.1.1",[m
[32m+[m[32m        "term-size": "1.2.0",[m
[32m+[m[32m        "widest-line": "2.0.1"[m
[32m+[m[32m      },[m
[32m+[m[32m      "dependencies": {[m
[32m+[m[32m        "ansi-styles": {[m
[32m+[m[32m          "version": "3.2.1",[m
[32m+[m[32m          "resolved": "https://registry.npmjs.org/ansi-styles/-/ansi-styles-3.2.1.tgz",[m
[32m+[m[32m          "integrity": "sha512-VT0ZI6kZRdTh8YyJw3SMbYm/u+NqfsAxEpWO0Pf9sq8/e94WxxOpPKx9FR1FlyCtOVDNOQ+8ntlqFxiRc+r5qA==",[m
[32m+[m[32m          "requires": {[m
[32m+[m[32m            "color-convert": "1.9.3"[m
[32m+[m[32m          }[m
[32m+[m[32m        },[m
[32m+[m[32m        "camelcase": {[m
[32m+[m[32m          "version": "4.1.0",[m
[32m+[m[32m          "resolved": "https://registry.npmjs.org/camelcase/-/camelcase-4.1.0.tgz",[m
[32m+[m[32m          "integrity": "sha1-1UVjW+HjPFQmScaRc+Xeas+uNN0="[m
[32m+[m[32m        },[m
[32m+[m[32m        "chalk": {[m
[32m+[m[32m          "version": "2.4.1",[m
[32m+[m[32m          "resolved": "https://registry.npmjs.org/chalk/-/chalk-2.4.1.tgz",[m
[32m+[m[32m          "integrity": "sha512-ObN6h1v2fTJSmUXoS3nMQ92LbDK9be4TV+6G+omQlGJFdcUX5heKi1LZ1YnRMIgwTLEj3E24bT6tYni50rlCfQ==",[m
[32m+[m[32m          "requires": {[m
[32m+[m[32m            "ansi-styles": "3.2.1",[m
[32m+[m[32m            "escape-string-regexp": "1.0.5",[m
[32m+[m[32m            "supports-color": "5.5.0"[m
[32m+[m[32m          }[m
[32m+[m[32m        },[m
[32m+[m[32m        "supports-color": {[m
[32m+[m[32m          "version": "5.5.0",[m
[32m+[m[32m          "resolved": "https://registry.npmjs.org/supports-color/-/supports-color-5.5.0.tgz",[m
[32m+[m[32m          "integrity": "sha512-QjVjwdXIt408MIiAqCX4oUKsgU2EqAGzs2Ppkm4aQYbjm+ZEWEcW4SfFNTr4uMNZma0ey4f5lgLrkB0aX0QMow==",[m
[32m+[m[32m          "requires": {[m
[32m+[m[32m            "has-flag": "3.0.0"[m
[32m+[m[32m          }[m
[32m+[m[32m        }[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
     "brace-expansion": {[m
       "version": "1.1.11",[m
       "resolved": "https://registry.npmjs.org/brace-expansion/-/brace-expansion-1.1.11.tgz",[m
       "integrity": "sha512-iCuPHDFgrHX7H2vEI/5xpz07zSHB00TpugqhmYtVmMO6518mCuRMoOYFldEBl0g187ufozdaHgWKcYFb61qGiA==",[m
[31m-      "dev": true,[m
       "requires": {[m
         "balanced-match": "1.0.0",[m
         "concat-map": "0.0.1"[m
       }[m
     },[m
[32m+[m[32m    "braces": {[m
[32m+[m[32m      "version": "2.3.2",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/braces/-/braces-2.3.2.tgz",[m
[32m+[m[32m      "integrity": "sha512-aNdbnj9P8PjdXU4ybaWLK2IF3jc/EoDYbC7AazW6to3TRsfXxscC9UXOB5iDiEQrkyIbWp2SLQda4+QAa7nc3w==",[m
[32m+[m[32m      "requires": {[m
[32m+[m[32m        "arr-flatten": "1.1.0",[m
[32m+[m[32m        "array-unique": "0.3.2",[m
[32m+[m[32m        "extend-shallow": "2.0.1",[m
[32m+[m[32m        "fill-range": "4.0.0",[m
[32m+[m[32m        "isobject": "3.0.1",[m
[32m+[m[32m        "repeat-element": "1.1.3",[m
[32m+[m[32m        "snapdragon": "0.8.2",[m
[32m+[m[32m        "snapdragon-node": "2.1.1",[m
[32m+[m[32m        "split-string": "3.1.0",[m
[32m+[m[32m        "to-regex": "3.0.2"[m
[32m+[m[32m      },[m
[32m+[m[32m      "dependencies": {[m
[32m+[m[32m        "extend-shallow": {[m
[32m+[m[32m          "version": "2.0.1",[m
[32m+[m[32m          "resolved": "https://registry.npmjs.org/extend-shallow/-/extend-shallow-2.0.1.tgz",[m
[32m+[m[32m          "integrity": "sha1-Ua99YUrZqfYQ6huvu5idaxxWiQ8=",[m
[32m+[m[32m          "requires": {[m
[32m+[m[32m            "is-extendable": "0.1.1"[m
[32m+[m[32m          }[m
[32m+[m[32m        }[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
     "browserslist": {[m
       "version": "3.2.8",[m
       "resolved": "https://registry.npmjs.org/browserslist/-/browserslist-3.2.8.tgz",[m
[36m@@ -764,6 +953,22 @@[m
       "resolved": "https://registry.npmjs.org/bytes/-/bytes-3.0.0.tgz",[m
       "integrity": "sha1-0ygVQE1olpn4Wk6k+odV3ROpYEg="[m
     },[m
[32m+[m[32m    "cache-base": {[m
[32m+[m[32m      "version": "1.0.1",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/cache-base/-/cache-base-1.0.1.tgz",[m
[32m+[m[32m      "integrity": "sha512-AKcdTnFSWATd5/GCPRxr2ChwIJ85CeyrEyjRHlKxQ56d4XJMGym0uAiKn0xbLOGOl3+yRpOTi484dVCEc5AUzQ==",[m
[32m+[m[32m      "requires": {[m
[32m+[m[32m        "collection-visit": "1.0.0",[m
[32m+[m[32m        "component-emitter": "1.2.1",[m
[32m+[m[32m        "get-value": "2.0.6",[m
[32m+[m[32m        "has-value": "1.0.0",[m
[32m+[m[32m        "isobject": "3.0.1",[m
[32m+[m[32m        "set-value": "2.0.0",[m
[32m+[m[32m        "to-object-path": "0.3.0",[m
[32m+[m[32m        "union-value": "1.0.0",[m
[32m+[m[32m        "unset-value": "1.0.0"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
     "camelcase": {[m
       "version": "1.2.1",[m
       "resolved": "https://registry.npmjs.org/camelcase/-/camelcase-1.2.1.tgz",[m
[36m@@ -775,6 +980,11 @@[m
       "integrity": "sha512-v+Q2afhJJ1oydQnEB4iHhxDz5x9lWPbRnQBQlM3FgtZxqLO8KDSdu4txUrFwC1Ws9I2kQi/QImkvj17NbVpNAg==",[m
       "dev": true[m
     },[m
[32m+[m[32m    "capture-stack-trace": {[m
[32m+[m[32m      "version": "1.0.1",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/capture-stack-trace/-/capture-stack-trace-1.0.1.tgz",[m
[32m+[m[32m      "integrity": "sha512-mYQLZnx5Qt1JgB1WEiMCf2647plpGeQ2NMR/5L0HNZzGQo4fuSPnK+wjfPnKZV0aiJDgzmWqqkV/g7JD+DW0qw=="[m
[32m+[m[32m    },[m
     "center-align": {[m
       "version": "0.1.3",[m
       "resolved": "https://registry.npmjs.org/center-align/-/center-align-0.1.3.tgz",[m
[36m@@ -797,6 +1007,56 @@[m
         "supports-color": "2.0.0"[m
       }[m
     },[m
[32m+[m[32m    "chokidar": {[m
[32m+[m[32m      "version": "2.0.4",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/chokidar/-/chokidar-2.0.4.tgz",[m
[32m+[m[32m      "integrity": "sha512-z9n7yt9rOvIJrMhvDtDictKrkFHeihkNl6uWMmZlmL6tJtX9Cs+87oK+teBx+JIgzvbX3yZHT3eF8vpbDxHJXQ==",[m
[32m+[m[32m      "requires": {[m
[32m+[m[32m        "anymatch": "2.0.0",[m
[32m+[m[32m        "async-each": "1.0.1",[m
[32m+[m[32m        "braces": "2.3.2",[m
[32m+[m[32m        "glob-parent": "3.1.0",[m
[32m+[m[32m        "inherits": "2.0.3",[m
[32m+[m[32m        "is-binary-path": "1.0.1",[m
[32m+[m[32m        "is-glob": "4.0.0",[m
[32m+[m[32m        "lodash.debounce": "4.0.8",[m
[32m+[m[32m        "normalize-path": "2.1.1",[m
[32m+[m[32m        "path-is-absolute": "1.0.1",[m
[32m+[m[32m        "readdirp": "2.2.1",[m
[32m+[m[32m        "upath": "1.1.0"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "ci-info": {[m
[32m+[m[32m      "version": "1.6.0",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/ci-info/-/ci-info-1.6.0.tgz",[m
[32m+[m[32m      "integrity": "sha512-vsGdkwSCDpWmP80ncATX7iea5DWQemg1UgCW5J8tqjU3lYw4FBYuj89J0CTVomA7BEfvSZ