class Node: 
    def __init__(self, data):
        self.data = data
        self.next = None
class LinkedList:
    def __init__(self):
        self.head = None
        
    def traverse(self):
        current = self.head
        
        while current is not None:
            print(current.data)
            current = current.next
            
ll = LinkedList()

ll.head = Node(10)
ll.head.next = Node(20)
ll.head.next.next = Node(30)

ll.traverse()