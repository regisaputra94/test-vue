<template>
  <div class="ui-banner">
    <div class="item">
      <h1 class="ui-title">Redeem Your Trello Gold!</h1>
      <p class="ui-text">Thanks for sharing Trello!</p>
      <p class="ui-text">Enjoy 1 month of Trello Gold on us.</p>
    </div>
    <div class="item">
      <ul class="ui-recommendation">
        <li>
          <p class="ui-text">
            <span uk-icon="icon: check"></span>
            Awww yeah…these people joined Trello on your recommendation: Regi Saputra
          </p>
        </li>
        <li>
          <p class="ui-text">
            <span uk-icon="icon: check"></span>
            Head over to your Trello Gold Billing page to redeem your credits
          </p>
        </li>
        <li>
          <p class="ui-text">
            <span uk-icon="icon: check"></span>
            Learn how to use your Trello Gold powers here
            </p>
        </li>
      </ul>

      <div class="ui-recommendation-close">
        <span uk-icon="icon: close"></span>
      </div>

      <img src="https://art.nativescript-vue.org/misc/phone.svg" alt="phone-image" width="200" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .ui-banner {
    display: flex;
    flex-direction: row;
    background-color: #4f617d;
    padding: 70px;
    margin-bottom: 50px;

    > .item {
      width: 30%;

      &:last-child {
        width: 70%;
        position: relative;

        > img {
          position: absolute;
          right: 0;
          top: 0;
        }
      }

      > .ui-recommendation {
        margin: 0;
        padding: 0;
        margin-top: 20px;
        list-style: none;
      }

      > .ui-recommendation-close {
        position: absolute;
        bottom: 80%;
        right: 0;
        color: #ffffff;
        background: #3c495e;
        width: 50px;
        height: 50px;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 50%;
        font-size: 30px;
        cursor: pointer;
        transition: all .2s ease-in-out;

        &:hover {
          background: #53ba82;
        }
      }
    }
  }

  .ui-title {
    color: #ffffff;
    font-weight: bold;
    font-size: 28px;
    margin: 0;
    margin-bottom: 20px;
  }

  .ui-text {
    color: #ffffff;
    margin: 0;
  }
</style>
