<template>
  <div v-if="board" class="ui-board">
    <div v-bind:class="'uk-card uk-card-'+ type +' uk-card-hover uk-card-body'">
      <router-link v-bind:to="'/'+ board.id + '/board'" class="uk-card-title">
        {{ board.title }}
      </router-link>

      <div class="footer">
        <p style="margin-top: 15px;">
          <span uk-icon="user"></span>
          <span style="position:relative;top:3px;">Tsuki Team</span>
        </p>

        <span v-if="board.isFavorite" uk-icon="star" style="color:#ffaf05;" v-on:click="toggleFavorite(board)"></span>
        <span v-else uk-icon="star" v-on:click="toggleFavorite(board)"></span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'UiBoardComponent',
  props: {
    type: {
      type: String,
      default: function () {
        return 'default'
      }
    },
    board: {
      type: Object
    },
    toggleFavorite: {
      type: Function
    }
  }
}
</script>

<style lang="scss" scoped>
  .ui-board {
    > .uk-card {
      padding: 10px 15px;
      position: relative;
      background: url('https://remote.co/wp-content/uploads/2018/05/Remote-Work-More-Than-a-Perk-for-Pros-with-Chronic-Conditions.jpg') center center;
      background-size: cover;
      border-radius: 5px;
      height: 120px;
      display: flex;
      flex-direction: column;
      position: relative;
      overflow: hidden;

      > .footer {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        color: #ffffff;
        width: 90%;
        position: absolute;
        top: 60%;
        left: 5%;
        font-weight: bold;
      }

      > .uk-card-title {
        color: #ffffff;
        margin: 0;
        font-weight: bold;
        text-decoration: none !important;
      }

      span {
        cursor: pointer;
      }
    }
  }
</style>
