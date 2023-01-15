import '#template/js/checkout'
import './custom-js/checkout'

const routerToLink = window.storefrontApp && window.storefrontApp.router
routerToLink.afterEach(({ name }) => {
  if(name === 'confirmation') {
    const appendLink = () => {
      let locale
      let currency
      const $html = document.querySelector('.order-info__redirect .btn.btn-lg.btn-success')
      const local = Intl.DateTimeFormat().resolvedOptions().timeZone
      if (local === 'America/Sao_Paulo') {
        locale = 'BR'
        currency = 'BRL'
      } else {
        locale = 'US'
        currency = 'USD'
      }
      if ($html) {
        const atribute = $html.href.replace(',00', '').replace('lc=US', `lc=${locale}`).replace('currency_code=USD', `currency_code=${currency}`)
        $html.href = atribute
        clearInterval(tryAppendInterval)
        
        
      }
    }
    const tryAppendInterval = setInterval(appendLink, 200)
  }
})
