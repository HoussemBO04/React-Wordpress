<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/documentation/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'TanitWeb' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', '' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'Eh5cyc97Bs!!~ EqmI^&i==>BLR5i~rm+)}=JgQVO<~A~CAplI}8aI9mc/-BpAT5' );
define( 'SECURE_AUTH_KEY',  'ld3$B:KHGq%`T6yC|:>75[Cciw|2{$uq}d=/r`)?u3T ?okk%,9>CY)pc~yz6z_j' );
define( 'LOGGED_IN_KEY',    '|#5;|cCb-8}AB*|k6<a#pIaAaPn2-4>w$IfPAp<!;_1o)y`<.i3wv`~ZvF/H*@D0' );
define( 'NONCE_KEY',        '9R|t[?Y(%O`&x2mT)zyOF_EbxR6t}Ey )R$CdrP0hQ?{Cm#CKi)6>(rvM%h,yT58' );
define( 'AUTH_SALT',        '69Y,_{cd%WX1t~ x<k~$|i`}=+l$0d`IN+]*Q4V9Vkk}HQC BC[0Ij>s6OkNK0HS' );
define( 'SECURE_AUTH_SALT', '=ZdK9hQ6=N%xGYw*PeD[b4{2leh@T.pL%xQ &6{ODaNA=DVcM,a^R~OCH*%Xigri' );
define( 'LOGGED_IN_SALT',   'd=W78>5Cch~`P{&O>k00Aqb>aGPL<byQ?<e4Yv<(q7=2PO,Z$KDd~H<A!6UBsxVi' );
define( 'NONCE_SALT',       'FVa=gl?l5lwO*>jlznar{b@T153G!$7x|@DB}FLF4%-{V1)g&Hc;W[{tBhlcb4ab' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/documentation/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
