import { createGlobalStyle } from 'styled-components'

const globalIconfont = createGlobalStyle`
@font-face {
  font-family: 'iconfont';
  src: url('./iconfont.eot?t=1543839757781'); /* IE9*/
  src: url('./iconfont.eot?t=1543839757781#iefix') format('embedded-opentype'),
    /* IE6-IE8 */
      url('data:application/x-font-woff;charset=utf-8;base64,d09GRgABAAAAAAWQAAsAAAAACAQAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABHU1VCAAABCAAAADMAAABCsP6z7U9TLzIAAAE8AAAARAAAAFY8rElMY21hcAAAAYAAAABhAAABnLVyILdnbHlmAAAB5AAAAasAAAHI5ajwm2hlYWQAAAOQAAAALQAAADYTdcW5aGhlYQAAA8AAAAAcAAAAJAfeA4VobXR4AAAD3AAAAA4AAAAQEAAAAGxvY2EAAAPsAAAACgAAAAoBLACSbWF4cAAAA/gAAAAeAAAAIAESADxuYW1lAAAEGAAAAUUAAAJtPlT+fXBvc3QAAAVgAAAALQAAAD6pWfxPeJxjYGRgYOBikGPQYWB0cfMJYeBgYGGAAJAMY05meiJQDMoDyrGAaQ4gZoOIAgCKIwNPAHicY2BkYWCcwMDKwMHUyXSGgYGhH0IzvmYwYuRgYGBiYGVmwAoC0lxTGByemT2PYm7438AQw9zA0AAUZgTJAQDoVQx0eJztkMENgCAQBOcADTGW4tNQDE9flkV1UAYehw+LcC9z2dsQHgssgFcOJYDcCEOXpmK5Z7M8kPSOOg5qqqXl3r/OJPYiqnPq9WdZ+bXbPt/Lj9Ym1mWZjL5bnuAfmmcV7gAAAHicJZA9b9NQGIXf19e+1xWNnSr+SJo01Lk3dquWJrHjawQlDRKRqvIxVgx8CFSoCCPZEGKoxNwZiaH5AUxsHTBC/IEu9f9gYanLLSxHOo/O8OgAAlzOyZH2BW4AGFHYYZQNLORbGI0wa6PvMNpGmclUEQuZIrHMfC+WQ/JhRquMaIP3k+Nc1/Njldc0c8kii/r5/KTQ9eJk75M8oNXK7RmlujFI/o9Ubm6YlrFg9uL5ua7GKmVyQCtV0JXPJckJAAMbBPQAAh4FjGNSI2HEKSOGTOIV5CmnvBOmwx0c8g7zLXQdL4nlHdTy17tlMXmF9st7bw2qGWyKRX/07iYGd7ey6bPxrd7ztZXV5W7/7IxAuY471ZDXyh9Ga/arJ/vr+9bi/e5jo9VwW3G3DfDP6Q/5rBVQg1XltAmA6igMKbMw8mQ2wgjlEFWJr8p1lF4WZf7CFY49hxzVt+vl7saTpjcm0++BXyH4zb/4Xf8ocdkSbwxBzIZIBR6WpwInpmNrP123fEAGD9ds7TASDenj1/r2xanbDZrNR64hMHsqUo4vylzgmNnOXxxZXdQAeJxjYGRgYABiJbPaKfH8Nl8ZuFkYQOCGtiMvgv6/iIWBGcTlYGACUQDePQduAAAAeJxjYGRgYG7438AQw8IAAkCSkQEVsAAARwoCbXicY2FgYGBBwgAAsAARAAAAAAAAAEgAkgDkAAB4nGNgZGBgYGEwAGIQYAJiLiBkYPgP5jMAAA3CAU8AAHicZY9NTsMwEIVf+gekEqqoYIfkBWIBKP0Rq25YVGr3XXTfpk6bKokjx63UA3AejsAJOALcgDvwSCebNpbH37x5Y08A3OAHHo7fLfeRPVwyO3INF7gXrlN/EG6QX4SbaONVuEX9TdjHM6bCbXRheYPXuGL2hHdhDx18CNdwjU/hOvUv4Qb5W7iJO/wKt9Dx6sI+5l5XuI1HL/bHVi+cXqnlQcWhySKTOb+CmV7vkoWt0uqca1vEJlODoF9JU51pW91T7NdD5yIVWZOqCas6SYzKrdnq0AUb5/JRrxeJHoQm5Vhj/rbGAo5xBYUlDowxQhhkiMro6DtVZvSvsUPCXntWPc3ndFsU1P9zhQEC9M9cU7qy0nk6T4E9XxtSdXQrbsuelDSRXs1JErJCXta2VELqATZlV44RelzRiT8oZ0j/AAlabsgAAAB4nGNgYoAALgbsgIWRiZGZkYWRlYGtODWxKDmDyTGRLTM5P09Xl4EBAD5wBUwAAAA=')
      format('woff'),
    url('./iconfont.ttf?t=1543839757781') format('truetype'),
    /* chrome, firefox, opera, Safari, Android, iOS 4.2+*/
      url('./iconfont.svg?t=1543839757781#iconfont') format('svg'); /* iOS 4.1- */
}

.iconfont {
  font-family: 'iconfont' !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
`
export default globalIconfont
