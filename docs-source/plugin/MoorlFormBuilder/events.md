# Formular Baukasten | Events

## Events

### FormFireEvent

Dieses Event wird unmittelbar nach dem Absenden eines Formulares ausgelöst.

In diesem Beispiel wird die E-Mail Addresse eines ausgewählten Händlers
Beim Absenden des Formulares als Empfänger hinzugefügt.

````php
namespace MyPlugin\Subscriber;

use MoorlFormBuilder\Core\Event\FormFireEvent;
use Shopware\Core\Framework\DataAbstractionLayer\EntityRepositoryInterface;
use Shopware\Core\Framework\DataAbstractionLayer\Search\Criteria;
use Symfony\Component\EventDispatcher\EventSubscriberInterface;
use Symfony\Component\HttpFoundation\Session\Session;
use Symfony\Component\HttpFoundation\ParameterBag;

class StorefrontSubscriber implements EventSubscriberInterface
{
    private $merchantRepository;

    public function __construct(
        EntityRepositoryInterface $merchantRepository
    )
    {
        $this->merchantRepository = $merchantRepository;
    }

    public static function getSubscribedEvents(): array
    {
        return [
            FormFireEvent::class => 'onProductRequest',
        ];
    }

    public function onProductRequest(FormEvent $event): void
    {
        $form = $event->getForm();

        if ($form->getAction() == 'product_request') {
            $session = new Session();

            if ($merchantId = $session->get('moorl-merchant-finder_selected_merchant')) {
                $criteria = new Criteria([$merchantId]);
                $merchant = $this->merchantRepository->search($criteria, $event->getContext())->first();

                if ($merchant) {
                    $receivers = explode(";", $form->getEmailReceiver());
                    $receivers[] = $merchant->getEmail();
                    $form->setEmailReceiver(implode(";", $receivers));
                }
            }
        }
    }
}
````

### FormLoadEvent

Dieses Event wird ausgelöst, bevor das Formular im Storefront angezeigt wird.
Hier hat man die Möglichkeit selbst Felder hinzuzufügen oder ein eigenes
Tracking einzubauen.

### FormCriteriaEvent

Das FormCriteriaEvent unterstützt den Entwickler das richtige Formular
anhand der gegebenen Umstände bzw. des Context zu selektieren.

### FormOptionCriteriaEvent

In der Formular Konfiguration kann man Datenbank-Werte für Selektierungen
nutzen, jedoch wird dort keine weitere Filtermöglichkeit angeboten.

So kann man zum Beispiel bei einer Produktselektierung ausschließlich
alle aktiven Produkte, die nicht auf Lager sind, in ein Formular laden.