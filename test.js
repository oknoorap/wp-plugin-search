import test from 'ava'
import searchPlugin from './index'

const foundCheck = (result, slug, t) => {
  let found = false
  result.items.forEach(item => {
    if (item.slug === slug) {
      found = true
    }
  })
  if (found) {
    t.pass()
  }
}

const searchContactForm = searchPlugin('contact-form-7')
test('Search `contact-form-7`', async t => {
  await searchContactForm.then(result => {
    foundCheck(result, 'contact-form-7', t)
  })
})

test('Total result of `contact-form-7` is more than 0', async t => {
  await searchContactForm.then(result => {
    t.true(result.total > 0)
  })
})

const searchWooCommerce = searchPlugin('woocommerce')
test('Search `woocommerce`', async t => {
  await searchWooCommerce.then(result => {
    foundCheck(result, 'woocommerce', t)
  })
})

const searchYoastSeo = searchPlugin('yoast seo', {
  fields: {
    downloaded: false
  }
})
test('Search `yoast seo`', async t => {
  await searchYoastSeo.then(result => {
    foundCheck(result, 'wordpress-seo', t)
  })
})
test('`yoast seo` downloaded fields disabled', async t => {
  await searchYoastSeo.then(result => {
    result.items.forEach(item => {
      t.is(item.downloaded, undefined)
    })
  })
})
