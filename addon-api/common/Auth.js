import Listenable from "./Listenable.js";

/**
 * Authentication related utilities.
 * @extends Listenable
 */
export default class Auth extends Listenable {
  /**
   * Fetch whether the user is logged in or not.
   * @returns {Promise<boolean>} - whether the user is logged in or not.
   */
  fetchIsLoggedIn() {
    return Promise.resolve(cocreaAddons.globalState.auth.isLoggedIn);
  }
  /**
   * Fetch current username.
   * @returns {Promise<?string>} - the username.
   */
  fetchUsername() {
    return Promise.resolve(cocreaAddons.globalState.auth.username);
  }
  /**
   * Fetch current user ID.
   * @returns {Promise<?number>} - the user ID.
   */
  fetchUserId() {
    return Promise.resolve(cocreaAddons.globalState.auth.userId);
  }
  /**
   * Fetch X-Token used in new APIs.
   * @returns {Promise<?string>} - the X-Token.
   */
  fetchXToken() {
    return Promise.resolve(cocreaAddons.globalState.auth.xToken);
  }
  /**
   * CSRF token used in APIs.
   * @type {string}
   */
  get csrfToken() {
    return cocreaAddons.globalState.auth.csrfToken;
  }
  /**
   * Language of the Cocrea website.
   * @type {string}
   */
  get cocreaLang() {
    return cocreaAddons.globalState.auth.cocreaLang;
  }

  /**
   * @private
   */
  get _eventTargetKey() {
    return "auth";
  }
}
