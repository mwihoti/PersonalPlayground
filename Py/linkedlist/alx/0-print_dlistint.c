#include "lists.h"
size_t print_dlistint(const dlistint_t *h)
{
    int elem ;
    elem = 0;

    if (h == NULL)
            return (elem);
    while (h->prev != NULL)
    
        h = h->prev;
    while (h != NULL)
    {
        printf("%d\n", h->n);
        elem++;
        h = h->next;


    }
    return(elem);
}
    
    