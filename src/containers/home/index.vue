<template>
  <div class="ui-page-home">
    <div class="list-group-wrapper">
      <sui-button v-on:click="sortBy('color')" basic primary>Color</sui-button>
      <sui-button v-on:click="sortBy('city')" basic primary>Cities</sui-button>
      <transition name="fade">
        <div class="loading" v-show="loading">
          <span class="fa fa-spinner fa-spin"></span> Loading
        </div>
      </transition>
      <div class="list-group" id="infinite-list">
        <div v-for="item in items">
          <div v-bind:class="datas[item].className">
            <sui-image v-bind:src="datas[item].picture.large" centered />
            <div>
              <label>
                {{datas[item].name.title + ' ' + datas[item].name.first + ' ' + datas[item].name.last}}
              </label>
            </div>
            <div>
              <label>
                {{datas[item].dob.age + ' years old'}}
              </label>
            </div>
            <div>
              <label>
                {{datas[item].email}}
              </label>
            </div>
            <div>
              <label>
                {{datas[item].registeredDate}}
              </label>
            </div>
            <div>
              <label>
                {{datas[item].location.city + ' ' + datas[item].location.state + ' ' + datas[item].location.postcode}}
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
import axios from 'axios'
import moment from 'moment'
import upperFirst from 'lodash/upperFirst'
import _sortBy from 'lodash/sortBy'

export default {
  created () {
    var _v = this;
    _v.getDatas();
  },
  mounted () {
    var _v = this;
    const listElm = document.querySelector('#infinite-list');
    listElm.addEventListener('scroll', e => {
      if(screen.width <= 768) {
        if(listElm.scrollTop + listElm.clientHeight >= listElm.scrollHeight) {
          this.loadMore();
        }
      } else {
        if(listElm.scrollLeft + listElm.clientWidth >= listElm.scrollWidth) {
          this.loadMore();
        }
      }
    });
    this.loadMore();
  },
  data: function () {
    return {
      items: [],
      datas: [],
      loading: false,
      nextItem: 0,
      totalData: 10
    }
  },
  methods: {
    loadMore () {
      this.loading = true;
      
      setTimeout(e => {
        for (var i = 0; i < 10; i++) {
          if (this.nextItem < 100) {
            this.items.push(this.nextItem++);
          }
        }
        this.loading = false;
      }, 200);
    },
    sortBy (sort) {
      this.datas = _sortBy(this.datas, [sort]);
    },
    getDatas: function() {
			var _v = this;
      axios.get('https://randomuser.me/api/?results=100')
        .then(function(response) {
          var data = response.data.results;
          data.map(function(item, idx) {
            item.color = 'red';
            if(item.dob.age > 21 && item.dob.age <= 56) {
              item.color = 'green';
            }

            if(item.dob.age > 56) {
              item.color = 'blue';
            }
            item.city = item.location.city;
            item.className = 'item-body ' + item.color;
            item.registeredDate = moment(item.registered.date).format('YYYY-MM-DD')

            _v.datas.push(item);
          });
        }, function(error) {
          console.log(error.statusText);
        });
		}
  }
}
</script>

<style lang="scss" scoped>
  $purple: #5c4084;

  .list-group-wrapper {
    position: absolute;
    top: 1rem;
    left: 1rem;
    width: 100rem;
  }
  .list-group {
    overflow: auto;
    padding-top: 1rem;
    height: 100%;
    
    display: flex;
  }
  .list-group-item {
    margin-top: 1px;
    border-left: none;
    border-right: none;
    border-top: none;
    border-bottom: 2px solid #dce4ec;
  }
  .item-body {
    width: 350px;
    padding: 15px;
    border: 2px solid #dce4ec;
    margin-right: 15px;

    &.red {
      background: red;
      color: white;
    }

    &.green {
      background: greenyellow;
    }

    &.blue {
      background: blue;
      color: white;
    }
  }
  .loading {
    text-align: center;
    position: absolute;
    color: #fff;
    z-index: 9;
    background: $purple;
    padding: 8px 18px;
    border-radius: 5px;
    left: calc(50% - 45px);
    top: calc(50% - 18px);
  }

  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s
  }
  .fade-enter, .fade-leave-to {
    opacity: 0
  }

  @media only screen and (max-width: 768px) {
    .list-group-wrapper {
      position: absolute;
      padding: 30px;
      width: 100%;
    }

    .list-group {
      overflow: auto;
      margin-top: 1rem;
      height: 80vh;
      width: 100%;
      display: block;
    }

    .item-body {
      width: 100%;
      border: 2px solid #dce4ec;
      margin-bottom: 1rem;
    }
  }
</style>
