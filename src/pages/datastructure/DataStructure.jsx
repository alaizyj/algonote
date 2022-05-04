import './datastructure.css';
import Card from '../../components/card/Card';
import arrayImg from '../../img/Array.png';
import linkedListImg from '../../img/LinkedList.png';
import stackImg from '../../img/Stack.png';
import queueImg from '../../img/Queue.png';
import hashImg from '../../img/HashTable.png';
import treeImg from '../../img/Tree.png';
import heapImg from '../../img/Heap.png';
import graphImg from '../../img/Graph.png';

export default function DataStructure() {
  return (
    <div>
      <p className='cat-title'> Data Structures </p>{' '}
      <div className='data-structure-types'>
        <Card
          title={'Array'}
          imgAddress={arrayImg}
          content={
            'An array is a structure of fixed-size, which can hold items of the same data type. It can be an array of integers, an array of floating-point numbers, an array of strings or even an array of arrays. '
          }
        />{' '}
        <Card
          title={'Linked List'}
          imgAddress={linkedListImg}
          content={
            'A linked list is a sequential structure that consists of a sequence of items in linear order which are linked to each other. Hence, you have to access data sequentially and random access is not possible. '
          }
        />{' '}
        <Card
          title={'Stack'}
          imgAddress={stackImg}
          content={
            'A stack is a LIFO (Last In First Out — the element placed at last can be accessed at first) structure which are common in many programming languages. '
          }
        />{' '}
        <Card
          title={'Queue'}
          imgAddress={queueImg}
          content={
            'A queue is a FIFO (First In First Out — the element placed at first can be accessed at first) structure which are common in many programming languages. '
          }
        />{' '}
        <Card
          title={'Hash Table'}
          imgAddress={hashImg}
          content={
            'A Hash Table is a data structure that stores values which have keys associated with each of them. Furthermore, it supports lookup efficiently if we know the key associated with the value.'
          }
        />{' '}
        <Card
          title={'Tree'}
          imgAddress={treeImg}
          content={
            'A tree is a hierarchical structure where data is organized hierarchically and are linked together. This structure is different from a linked list whereas, in a linked list, items are linked in a linear order.'
          }
        />{' '}
        <Card
          title={'Heap'}
          imgAddress={heapImg}
          content={
            'A tree is a hierarchical structure where data is organized hierarchically and are linked together. This structure is different from a linked list whereas, in a linked list, items are linked in a linear order.'
          }
        />{' '}
        <Card
          title={'Graph'}
          imgAddress={graphImg}
          content={
            'A graph consists of vertices or nodes and a set of edges connecting these vertices. The order and size of a graph is the number of vertices and edges in the graph accordingly.'
          }
        />{' '}
      </div>
    </div>
  );
}
