$(document).ready(function(){var e=$("#myo-order-details-buyer-address").html(),d=$("#myo-order-details-product-asin").html(),r=$("#myo-order-details-order-items-total").html(),t=e+"~~~"+d+"~~~"+r;chrome.runtime.sendMessage({command:"sendaddress",datax:t})});