import { sdk } from './fs-sdk.js';

// Card Details Component

const cardComponent = sdk.components.create('fs-card', {
    labelMode: 'fixed',
    hideCardHeader: false,

    style: {
        state: {
            default: {
                card: {
                    backgroundColor: 'transparent',
                    border: 'none',
                    boxShadow: 'none',
                    padding: '0',
                },
                input: {
                    backgroundColor: '#ffffff',
                    borderColor: '#404040',
                    borderRadius: '6px',
                    boxShadow: '3px 3px 0 #404040',
                    height: '48px',
                    padding: '0 10px',
                    color: '#1D224D',
                    fontSize: '16px',
                    fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
                },
            },
            focus: {
                input: {
                    borderColor: '#4d90fe',
                },
            },
            error: {
                input: {
                    borderColor: '#e53935',
                },
            },
        },
    },
});

cardComponent.mount('#card-element');

// Payment Button

const payButtonComponent = sdk.components.create('fs-pay-button', {
  style: {
    state: {
      default: {
        button: {
          backgroundColor: '#2563EB',
          color: '#ffffff',
          border: '1px solid #404040',
          borderRadius: '6px',
          boxShadow: '4px 4px 0 #404040',
          width: '400px',
          height: '54px',
          fontSize: '18px',
          fontWeight: 'bold',
          cursor: 'pointer',
        }
      },
      hover: {
        button: {
          backgroundColor: '#286090',
        }
      },
      disabled: {
        button: {
          backgroundColor: '#EBF6FF',
          color: '#8d8d8d',
          border: '1px solid #8d8d8d',
          boxShadow: '4px 4px 0 #8d8d8d',
          opacity: '0.8',
          cursor: 'not-allowed',
        }
      }
    }
  }
});

payButtonComponent.mount('#pay-button-element');

// FastSpring Compliance Text

const disclosuresComponent = sdk.components.create('fs-disclosures', {
  style: {
    state: {
      default: {
        container: {
          color: '#666666',
          fontFamily: 'Helvetica',
          fontSize: '12px'
        },
        link: {
          color: '#0066cc'
        }
      }
    }
  }
});

disclosuresComponent.mount('#disclosures-element');

// Coupon Component

const couponComponent = sdk.components.create('fs-coupon', {
  presentation: 'expanded',
  style: {
    state: {
      default: {
        container: {
          background: 'transparent',
          border: 'none',
          boxShadow: 'none',
          padding: '0'
        },
        input: {
          background: '#ffffff',
          borderColor: '#404040',
          borderRadius: '6px',
          boxShadow: '3px 3px 0 #404040',
          height: '44px',
          color: '#1D224D',
          fontSize: '16px',
          fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif'
        },
        button: {
          background: '#ff9950',
          color: '#ffffff',
          border: '1px solid #404040',
          borderRadius: '6px',
          boxShadow: '4px 4px 0 #404040',
          fontWeight: 'bold',
          fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif'
        },
        chip: {
          background: '#fff3ea',
          color: '#ff9950',
          borderRadius: '12px'
        },
        toggle: {
          color: '#0066cc',
          fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
          fontSize: '18px'
        }
      },
      focus: {
        input: {
          borderColor: '#4d90fe'
        }
      },
      hover: {
        button: {
          background: '#e6873f'
        }
      },
      disabled: {
        button: {
          background: '#ffe3cc',
          color: '#8d8d8d',
          border: '1px solid #8d8d8d',
          boxShadow: '4px 4px 0 #8d8d8d',
          opacity: '0.8',
          cursor: 'not-allowed'
        }
      }
    }
  }
});

couponComponent.mount('#coupon-element');